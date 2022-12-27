const productModel=require("../models/productModel")

const createProduct=async function(req,res){
  data=req.body
  const product=await  productModel.create(data)
  res.send({msg:product}) 
}


module.exports.createProduct=createProduct