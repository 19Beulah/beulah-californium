let {email, pass} = req.body
findOne({email:email, password:pass})  //authenticity

const jwt = require("jsonwebtoken")
let token = jwt.sign({Id:userId}, "secret", {expire:'24hr' })

let verify = jwt.verify(token, 'secret')

//authorization
const userId = req.params   //request

if(userId != Id)return res.send("user is unauthorized")
  //user authorized
  
  
  const express = require('express');
  const route = require('./routes/route.js');
  const   mongoose  = require('mongoose');
  const app = express();
  
  app.use(express.json());
 
mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/Pritesh8769811-DB?retryWrites=true&w=majority", {
      useNewUrlParser: true
  })
  .then( () => console.log("MongoDb is connected"))
  .catch ( err => console.log(err) )
  
  app.use('/', route);
  // unreachable becuase the cycle has terminated
  app.use(
      function (req, res, next) {
          console.log ("inside GLOBAL MW");
          next();
    }
  );
  
  
  app.listen( 3000, function () {
      console.log('Express app running on port ' + 3000)
  });
  

  