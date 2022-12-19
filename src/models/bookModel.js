const mongoose = require('mongoose');

const BookModel= new mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    ISBN: {
        type: String,
        required: true,
        unique: true
    },
    authorName: String,
    tags: [ String ], 
    year:{
       type: Number,
      default:2021   
    } ,
    isPublished: {
        type: Boolean, 
        default: false
    },
    prices: {
        indianPrice: String,
        europeanPrice: String
    },
    totalPages:Number,
    stockAvailable:Boolean,
    sales: {
        type: Number,
        default : 0
    },
    completionDate: Date
  
 }, {timestamps: true} )
  
 module.exports = mongoose.model( 'Bookdata', BookModel )

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
