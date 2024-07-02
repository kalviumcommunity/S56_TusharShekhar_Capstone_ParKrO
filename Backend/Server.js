const express = require('express');
const cors = require('cors');
const connectToDB = require('./db'); 
const { UserDetails ,QueryDetails} = require('./User');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const rateLimit = require('express-rate-limit')
const app = express();
const port = 3200;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100, 
  message: 'Too many requests from this IP, please try again later.'
});
app.use('/signup',limiter)

app.use(cors());
app.use(express.json());

const validateSignup = [
  body('email').isEmail().withMessage('Invalid email address'),
  body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
];

const validateQuerry = [
  body('email').isEmail().withMessage('Invalid email address'),
  body('fullname').not().isEmpty().withMessage('Full name is required'),
  body('MobileNo').isMobilePhone('any').withMessage('Invalid MobileNo'),
  body('City').not().isEmpty().withMessage('City is Required'), 
  body('query').not().isEmpty().withMessage('Query text is required')
]

app.get('/get', async (req, res) => {
  try {
    const users = await UserDetails.find({});
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/getQuery',async(req,res)=>{
  try{
    const queryUser = await QueryDetails.find({})
    res.json(queryUser);
  }
  catch(error){
    console.log(error)
    res.status(500).json({ error: 'Internal Server Error' });
  }
})


app.post('/signup',validateSignup, async (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10); 
    const newUser = new UserDetails({
      email: req.body.email,
      password: hashedPassword
    });
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (error) {
    // console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/query' ,limiter,validateQuerry, async(req,res)=>{

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


connectToDB().then(() => {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
});
