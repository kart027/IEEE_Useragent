const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');

const app = express();
app.set("view engine", "ejs")
// app.set("views", path.resolve(__dirname, "views/ejs"))
app.use(bodyParser.urlencoded({ extended : true}))
app.use(express.static("./assests"))
const UserAgent = require('user-agents'); 
const { type } = require('os');
require('dotenv').config({path:"./config/config.env"});

 
app.get('/', (req, res) => {
  res.render('Home') 
});

app.get('/randomUseragent',(req,res)=>{
  res.render('randomUseragent')
})
app.get('/Decoderuseragent',(req,res)=>{
  res.render('Decoderuseragent')
})
 
app.get('/decodeuser', (req, res) => {
 const U =  req.query.u;
const k = JSON.parse(U);
 res.render('Decoderuseragent',{users:k}) 
  }
  );


app.post('/useragent',(req,res)=>{
  const n = req.body.number;
  let k = []
  for(var i= 0;i<n;i++){
    const agent1 = new UserAgent();
    k.push(agent1);
  }



    res.render('showinguseragent',{users:k})
  
})




const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
