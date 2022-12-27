const orderModel=require("../models/orderModel")

const createOrder=async function(req,res){
//If the header **isFreeAppUser** is not present terminate the request response cycle with an error message that the request is missing a mandatory header.
const isHeader=req.header["isFreeAppUser"]
if(!isHeader){
    isHeader=req.header["isfreeappuser"]  
}
if(!isHeader){
    return res.send({status:false, msg:"the request is missing a mandatory header"})
}
 let data=req.body
 if(isHeader==true){
    data.isFreeAppUser=true
 }else{
    data.isFreeAppUser=false
 }  
//Perform the user and product validation. Check if the user exists as well as whether the product exists. Return an error with a suitable error message if either of these validations fail
//For every purchase we save an order document in the orders collection.
//user
 const userValid= await orderModel.findById({userId:data.userId})
if(!userValid) res.send({msg:"user not valid"})
//product
const poductValid=await orderModel.findById({productId:data.productId})
if(!poductValid) res.send({msg:"this product not valid"})

//For every purchase we save an order document in the orders collection. isFreeAppUser property in an Order document depends on the header **isFreeAppUser**. If the **isFreeAppUser** header is true then the balance of the user is not deducted and the amount in order is set to 0 as well the attribute in order **isFreeAppUser** is set to true. If this header has a false value then the product’s price is checked. This value is deducted from the user’s balance and the order amount is set to the product’s price as well as the attrbiute **isFreeAppUser** is set to false in order document.
if(isHeader==true){
    data.amount=0
   const myData=await orderModel.create(data)
   res.send({msg:myData}) 
}
if(isHeader!==true){
  if( user.balance< product.price ){
    res.send({msg:"user does not have safficient money"})
  } 
}




 
  const myOreder= await orderModel.create(data)
  res.send({msg:myOreder})
}
module.exports.createOrder=createOrder