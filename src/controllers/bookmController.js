const { count } = require("console")
const bookm= require("../models/bookm")
const authorModel= require("../models/authorModel")
//1.Write create APIs for both books and authors ---> If author_id is not available then do not accept the entry(in neither the author collection nor the books collection)
const createBook= async function (req, res) {
    let data= req.body
    const isAuthor=await authorModel.findOne({author_id:data.author_id})
    //console.log(isAuthor) 
    if(isAuthor) res.send({msg: await bookm.create(data)})
   else  res.send({msg:"book not exist"})
}
const createAuthor= async function (req, res) {
    
    let data= req.body
  let savedData=await bookm.findOne({author_id:data.author_id}) 
  if(savedData) res.send({msg:await authorModel.create(data)}) 
   else res.send({msg:"no author data"})
}
//2 .List out the books written by "Chetan Bhagat" ( this will need 2 DB queries one after another- first query will find the author_id for "Chetan Bhagat”. Then next query will get the list of books with that author_id )
const getid= async function (req, res){
    let data=req.body
    const id=await authorModel.find(data)
     res.send({msg:id})
    }
const listOfAuthorBooks= async function (req,res){
    //let data=req.dody
    const authorBookList=await bookm.find({author_id:1})
    res.send({msg:authorBookList})
}
//3 .find the author of “Two states” and update the book price to 100;  Send back the author_name and updated price in response.  ( This will also need 2  queries- 1st will be a findOneAndUpdate. The second will be a find query aith author_id from previous query)
const update=async function (req,res){
let updatePrise=await bookm.findOneAndUpdate(
    {name:"Two states"},
    {$set:{price:100}}
)
 let findAuthor=await authorModel.find({author_id:1})
    res.send({msg:findAuthor}) 
}
//4.Find the books which costs between 50-100(50,100 inclusive) and respond back with the author names of respective books.. 
//bookModel.find( { price : { $gte: 50}  ,  price: {$lte: 100} } ) // WRONG
//bookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})..run a map(or forEach) loop and get all the authorName corresponding to the authorId’s ( by querying authorModel)
const inprice=async function (req,res){
   const price= await bookm.find({price:{$gte:50,$lte:100}}) 
   const authorId=price.map(a=>a.author_id)
   const authordetails=await authorModel.find({author_id:{$in:authorId}})
   res.send({msg:authordetails})
}
module.exports.createBook= createBook
module.exports.createAuthor= createAuthor
module.exports.getid= getid
module.exports.listOfAuthorBooks= listOfAuthorBooks
module.exports.update= update
module.exports.inprice=inprice

/*



*/
