const express = require('express');
const cors = require('cors');
const connectToDB = require('./db'); 
const { UserDetails ,QueryDetails,QrCodeDetails,ProfileDetails} = require('./User');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const rateLimit = require('express-rate-limit')
// const jwtSecret = process.env.JWT_SECRET
const jwt = require('jsonwebtoken');
const QRCode = require('qrcode');
const multer = require('multer');
const app = express();
const port = 3200;
require('dotenv').config();

// Rate Limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests from this IP, please try again later.'
});
app.use('/signup', limiter);

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');  // Directory where files will be uploaded
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({ storage });


const validateSignup = [
  body('email').isEmail().withMessage('Invalid email address'),
  body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
];

const validateLogin = [
  body('email').isEmail().withMessage('Invalid email address'),
  body('password').not().isEmpty().withMessage('Password is required'),
];

// Sign up route
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

// Login route
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

    // Corrected secret to use consistent JWT secret
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Token Authentication Middleware
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
    const newDelete = await QueryDetails.findByIdAndDelete(id); // Corrected the usage of findByIdAndDelete
    if (!newDelete) {
      return res.status(404).send({ message: 'Query not found' }); // Handle case where the query is not found
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
      { new: true }  // Return the updated document
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

  // Ensure that all required fields are provided
  if (!fullname || !vehicleNo) {
    return res.status(400).json({ message: 'Fullname and Vehicle Number are required.' });
  }

  // Data to be encoded in the QR code
  const data = `Full Name: ${fullname}, Vehicle Number: ${vehicleNo}`;

  try {
    // Generate the QR code as a data URL
    const qrCodeDataUrl = await QRCode.toDataURL(data);

    // Save all the data including the generated QR code to the database
    const qrCodeEntry = new QrCodeDetails({
      fullname,
      vehicle,
      mobile,
      vehicleNo,
      location,
      qrimg: qrCodeDataUrl,  // Store the QR code image (Base64 string)
    });

    // Save the entry to the MongoDB collection
    await qrCodeEntry.save();

    // Send the QR code back to the frontend
    res.status(200).json({ qrCode: qrCodeDataUrl, message: 'QR code generated and stored successfully.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to generate and store QR code' });
  }
});
app.post('/profile/update', upload.single('vehicleImg'), async (req, res) => {
  const { fullname, age, licenseNo, vehicleType, contactNo, vehicleNo, location } = req.body;
  
  const vehicleImg = req.file ? req.file.filename : null;

  try {
    const updatedProfile = new ProfileDetails({
      fullname,
      age,
      licenseNo,
      vehicleType,
      contactNo,
      vehicleNo,
      location,
      vehicleImg
    });

    await updatedProfile.save();
    res.status(200).json({ message: 'Profile updated successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update profile' });
  }
});



connectToDB().then(() => {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
});