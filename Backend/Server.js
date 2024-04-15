const express = require('express');
const app = express();
const port = 3200;
const uri = process.env.URI;
const {UserDetails} = require('./User.js')

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/login',async(req,res)=>{
  try{
    const data = await UserDetails.find()
    res.json(data);
  }
  catch(error){
    console.log(error)
  }
})
app.post('/addUsers',async(req,res)=>{
  try{
    const response = await UserDetails.create(req.body)
    res.status(200).json(response);
  }
  catch(error){
    console.log(error);
  }
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
