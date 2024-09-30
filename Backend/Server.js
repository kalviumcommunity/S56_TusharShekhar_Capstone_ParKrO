const express = require('express');
const cors = require('cors');
const connectToDB = require('./db'); 
const { UserDetails ,QueryDetails,QrCodeDetails,HelpDetails} = require('./User');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const rateLimit = require('express-rate-limit')
const jwt = require('jsonwebtoken');
const QRCode = require('qrcode');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphqlSchema'); 
const resolvers = require('./resolvers'); 
const app = express();
const port = 3200;
require('dotenv').config();


const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests from this IP, please try again later.'
});
app.use('/signup', limiter);


app.use(cors());
app.use(express.json());

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}));


const validateSignup = [
  body('email').isEmail().withMessage('Invalid email address'),
  body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
];

const validateLogin = [
  body('email').isEmail().withMessage('Invalid email address'),
  body('password').not().isEmpty().withMessage('Password is required'),
];


app.post('/signup', validateSignup, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const existingUser = await UserDetails.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already registered' });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new UserDetails({
      email: req.body.email,
      password: hashedPassword
    });
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.post('/login', validateLogin, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const user = await UserDetails.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, 'your_jwt_secret');
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};

app.get('/protected-route', authenticateToken, (req, res) => {
  res.status(200).json({ message: 'This is a protected route.' });
});


app.post('/query' ,limiter, async(req,res)=>{
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()});
  }
  try{
    const newQuery =  new QueryDetails({
      fullname:req.body.fullname,
      email:req.body.email,
      MobileNo:req.body.MobileNo,
      City:req.body.City,
      query:req.body.query
    })
    const userQuery = await newQuery.save();
    res.status(200).json(userQuery);
  }
  catch(error){
    console.log(error)
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

app.delete('/getQuery/delete/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const newDelete = await QueryDetails.findByIdAndDelete(id); 
    if (!newDelete) {
      return res.status(404).send({ message: 'Query not found' });
    }
    console.log(newDelete);
    res.status(200).send(newDelete);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

app.put('/getQuery/update/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const updatedQuery = await QueryDetails.findByIdAndUpdate(
      id,
      { query: req.body.query },
      { new: true }
    );
    if (!updatedQuery) {
      return res.status(404).send({ message: 'Query not found' });
    }
    res.status(200).send(updatedQuery);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

app.post('/generate-qrcode', async (req, res) => {
  const { fullname, vehicle, mobile, vehicleNo, location } = req.body;
  if (!fullname || !vehicleNo) {
    return res.status(400).json({ message: 'Fullname and Vehicle Number are required.' });
  }
  const data = `Full Name: ${fullname}, Vehicle Number: ${vehicleNo}`;
  try {
    const qrCodeDataUrl = await QRCode.toDataURL(data);
    const qrCodeEntry = new QrCodeDetails({
      fullname,
      vehicle,
      mobile,
      vehicleNo,
      location,
      qrimg: qrCodeDataUrl,  
    });
    await qrCodeEntry.save();
    res.status(200).json({ qrCode: qrCodeDataUrl, message: 'QR code generated and stored successfully.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to generate and store QR code' });
  }
});

// GraphQL Endpoint
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,  
}));

connectToDB().then(() => {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
});