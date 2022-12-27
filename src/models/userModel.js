const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    name: String,
    balance:{
        type:Number,
        default:false
    },
    address:String,
    age: Number,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    },
    isFreeAppUser:{
        type:Boolean,
        default:false
    } 
}, { timestamps: true });

module.exports = mongoose.model('beulahUser', userSchema) //users



