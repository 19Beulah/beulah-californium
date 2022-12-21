const mongoose = require('mongoose');

const customerSchema= new mongoose.Schema( {
  firstName:{
    type:String,
    required: true
  },
  lastName: String,
  mobileNumber:{
    type:String,
  },
    DOB:{type: Date,
      default: Date.now},
    emailID:{
        type:String,
        default:"abc@xyz.com"
    },
    address :String,
    customerID :String,
    status:String
})

module.exports = mongoose.model('customer',customerSchema)
// firstName string
// lastName string
// mobileNumber string 10 digits long
// DOB date
// emailID string abc@xyz.com
// address string
// customerID string UUID
// status string ACTIVE / INACTIVE