const mongoose = require('mongoose');
const a  = new mongoose.Schema({
    bookName : String,
    authorName:String,
    category:String,
    year:Number
 }, 
 
 { timestamps: true }
 )    
 module.exports = mongoose.model('books',a)