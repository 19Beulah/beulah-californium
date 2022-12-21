const mongoose = require('mongoose');

const cardSchema= new mongoose.Schema( {
    cardNumber:String,
    cardType:String,
    customerName:String,
    status:{
        type:String,
        default:"ACTIVE",
    },
    vision:String, 
    customerID:String
})
module.exports = mongoose.model('card',cardSchema )
// cardNumber string Auto_increment e.g: C001
// cardType String [REGULAR/SPECIAL]
// customerName string
// status string [ACTIVE/INACTIVE] Default: ACTIVE
// vision string
// customerID string Reference from customer
// table