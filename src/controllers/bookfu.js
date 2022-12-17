const b= require("../models/booksmodal.js")
const bookdetails= async function (req, res) {
    let data= req.body
    let saveData= await b.create(data)
    res.send({msg: saveData})
}
const booksData= async function (req, res) {
    let alUsers= await b.find()
    res.send({msg: alUsers})
}
module.exports.bookdetails= bookdetails
module.exports.booksData= booksData