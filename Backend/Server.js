const express = require('express');
const cors = require('cors');
const connectToDB = require('./db'); 
const { UserDetails } = require('./User');
const bcrypt = require('bcrypt');

const app = express();
const port = 3200;

app.use(cors());
app.use(express.json());

app.get('/get', async (req, res) => {
  try {
    const users = await UserDetails.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/signup', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10); 
    const newUser = new UserDetails({
      email: req.body.email,
      password: hashedPassword
    });
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

connectToDB().then(() => {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
});
