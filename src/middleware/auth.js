const jwt = require("jsonwebtoken")

const authenticate= function(req,res,next){
    let token=  req.headers["x-Auth-Token"]
    if(!token) token =req.headers["x-auth-token"]
    if(!token) return res.send({status :false,msg:"the req is missing a mandatory header"})
  //verification
    let verifyToken= jwt.verify(token,"functionup-californium-Beulah") 
    if(!verifyToken) return res.send({status:false,msg:"invalid token"})
  
    next()
  }


const authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request
     let userId=req.perams.userId
     let Id=req.Id
     if(userId!==Id) return res.send({status:false,msg:"user not found"})
    next()
}
module.exports.authenticate=authenticate
module.exports.authorise=authorise