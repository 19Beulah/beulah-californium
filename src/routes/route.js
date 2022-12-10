const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const _ = require('underscore')
const imp =require('../logger/logger.js')
const day=require('../util/helper.js')
const lc=require('../validator/formatter.js')

router.get('/test-me', function (req, res) {
    console.log("email from introduction module", intro.myEmail)
    intro.myFunction('Sabiha')
    console.log("email from employee module", employee.myEmail)
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let result = _.first(days, 4)
    console.log(`Result from underscore function is ${result}`)

    imp.aboutMe('Beulah');
    day.today(Date);
    lc.trimtoLowerCase('Beulah Perikala');

    const arr =['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    console.log(_.chunk(arr,3));

    const array=[1,3,5,7,9,11,13,15,17,19];
    console.log(_.tail(array));

    const arra1=[1,2,3];
    const arra2=[3,4,5];
    const arra3=[5,6,7];
    const arra4=[7,8,9];
    const arra5=[9,10,11];
    console.log(_.union(arra1,arra2,arra3,arra4,arra5))

    const obj={
        name:'Bhushan Kumar',
        gender:'male',
        age:20,
        Location:'Andhra Pradhesh',
    }
    console.log(_.pairs(obj))

    res.send('any dummy text')
});
   router.get('/about-classes',function(req,res){
 console.log("Californium,W3D4,the topic for today is Nodejs module system")
   
})

router.get('/test-you', function(req, res){
    console.log("I am here")
    res.send("very important text")
})


module.exports = router;