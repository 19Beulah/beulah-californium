const { count } = require("console")
const customerModel= require("../models/customerModel")
const cardModel= require("../models/cardModel")

const createcustmer=async function(req,res){
   data=req.body
   let createcus=await customerModel.create(data)
   res.send({msg:createcus})


}
module.exports.createcustmer=createcustmer
// {      
//     "firstName":"Beulah",
//     "lastName": "Perikala",
//     "mobileNumber":"6789028387",
//       "DOB": "12-2-2020",
//       "emailID":"cge@tyu.com",
//       "address" :"AP",
//       "customerID" :"UUID45689",
//       "status":"ACTIVE"
//   }