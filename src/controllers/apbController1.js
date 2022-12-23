const newAuthor=require("../models/newAuthorModel")
 const newPublisher=require("../models/newPublisherModel")
 const newBookModel=require("../models/newBookModel")
const { updateMany } = require("../models/newAuthorModel")

//TOPIC: Mongoose Populate and Reference
// 1. Write a POST api that creates an author from the details in request body
const createnewAuthor =async function(req,res){
  let data=req.body  
let newAuthors=await newAuthor.create(data)
  res.send({msg:newAuthors})
}
//2. Write a POST api that creates a publisher from the details in the request body

const createnewPublisher =async function(req,res){
    let data=req.body  
  let newAuthors=await newPublisher.create(data)
    res.send({msg:newAuthors})
  }

  //3. Write a POST api that creates a book from the details in the request body. The api takes both the author and publisher from the request body. 
const createnewBook =async function(req,res){
    let {name,author,price,ratings,publisher}=req.body

//a.The authorId is present in the request body. If absent send an error message that this detail is required
 if(!author){
      return res.send({status:false,msg:"author detail is required"})
   }
//b.If present, make sure the authorId is a valid ObjectId in the author collection. A valid ObjectId in author collection means that a document must exist with this id. If not then send an error message that the author is not present 
   const authorid=await newAuthor.findOne({_id: author})

   if(!authorid){
    return res.send({status:false,msg:"invalid authorId"})
   }
//c.The publisherId is present in the request body. If absent send an error message that this detail is required
   if(!publisher){
  return  res.send({status:false,msg:"publisher is mandatory"})
   }
//d.If present, make sure the publisherId is a valid ObjectId in the publisher collection. If not then send an error message that the publisher is not present.
  const publisherid=await newPublisher.findOne({_id:publisher})
 
  if(!publisherid){
     return res.send({status:false,msg:"publisherid authorId"})
  }
    let createBook=await newBookModel.create({name,author,price,ratings,publisher})
    res.send({msg:createBook})
  

}
//4. Write a GET api that fetches all the books along with their author details (you have to populate for this) as well the publisher details (you have to populate for this) 
  const newBook =async function(req,res) {
  let createBook= await newBookModel.find().populate("author").populate("publisher")
      res.send({msg:createBook})          
  }
// a) Add a new boolean attribute in the book schema called isHardCover with a default false value. For the books published by 'Penguin' and 'HarperCollins', update this key to true.

const updatadBook=async function(req,res){
let publishers=await newPublisher.find({$or:[{name:"HarperCollins"},{name:"Penguin"}]}) 
const publishersId=publishers.map(x=>x._id)
const update=await newBookModel.updateMany(   
  {publisher:{$in:publishersId}},  
  {isHardCover:true}           
)
//res.send({msg:update})

// b) For the books written by authors having a rating greater than 3.5, update the books price by 10 (For eg if old price for such a book is 50, new will be 60)
let createBook= await newBookModel.find().populate("author").populate("publisher")
let author=await newAuthor.find({rating:{$gt:3.5}})
const authorId= author.map(y=>y._id)
let rating=await newBookModel.updateMany(
  {author:{$in:authorId}},
  {$inc:{price:10}}
)
let book=await newBookModel.find()     
  res.send({msg:rating})
}

// const search=async function(req,res,next){
//   let data=req.body 
//   console.log("hiiiiii") 
// // let newAuthors=await newPublisher.create(data)
//   //res.send({msg:newAuthors})
//   next()
// }
module.exports.createnewAuthor=createnewAuthor 
module.exports.createnewPublisher=createnewPublisher
module.exports.createnewBook=createnewBook
module.exports.newBook=newBook
module.exports.updatadBook=updatadBook



