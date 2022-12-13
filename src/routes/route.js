const express = require('express');
const app = express();
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const _ = require('underscore')
const mentorModule = require('../abc/xyz/myModule'); 
const req = require('express/lib/request');
const { route } = require('express/lib/application');


router.get("/profile-details", function(req, res){
    // Write the LOGIC here
    res.send('dummy response')
})
router.get("/family",function (req,res){
   const fm=["devadhanamma","Joshuva","Ruth","Bhushan Kumar","Beulah"];
   res.send(fm)  
})
router.get("/family/:indexNumber",function (req,res){
 const fm=["devadhanamma","Joshuva","Ruth","Bhushan Kumar","Beulah"];
 if(req.url=='/family/0'){
    res.send(fm[0]);
 }else if (req.url=="/family/1"){
    res.send(fm[1]);
}else if(req.url=="/family/2"){
    res.send(fm[2]);
}else if(req.url=="/family/3"){
    res.send(fm[3]);
}else if(req.url=="/family/4"){
    res.send(fm[4]);
}else{
   res.end("use a valid index") 
}
})

router.get("/cartoons",function(req,res){
    const cn=[ {
                 "id":1,
                 "name":"Shin chan"
              },
              {
                 "id":2,
                 "name":"Doraemon"
              },
              {
                 "id":3,
                 "name":"Dora bujji"
              },
              {
                 "id":4,
                 "name":"Super dragon balls"
              } ];
    res.send(cn)
   }) ;

    router.get("/cartoons/:filmId",function(req,res){
        const cn=[ {
            "id":1,
            "name":"Shin chan"
         },
         {
            "id":2,
            "name":"Doraemon"
         },
         {
            "id":3,
            "name":"Dora bujji"
         },
         {
            "id":4,
            "name":"Super dragon balls"
         }];

    if(req.url=="/cartoons/1"){
        res.send(cn[0]);
     }else if (req.url=="/cartoons/2"){
        res.send(cn[1]);
    }else if(req.url=="/cartoons/3"){
        res.send(cn[2]);
    }else if(req.url=="/cartoons/4"){
        res.send(cn[3]);
    }else{
       res.send("No cartoon exists with this id") 
    }
})



router.get('/test-me', function (req, res) {
    console.log("email from introduction module", intro.myEmail)
    intro.myFunction('Sabiha')
    console.log("email from employee module", employee.myEmail)

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let result = _.first(days, 4)
    console.log(`Result from underscore function is ${result}`)
    console.log(`The mentor of the day is ${mentorModule.mentor}`)

    res.send('any dummy text from route handler 1')
});


router.get('/test-me', function(req, res){
    console.log("I am here")
    res.send("any dummy text from route handler 2")
})

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

// PATH Param example
router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use many ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request"+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    //res.send('Name of the student is ', studentName)
    res.send('Dummy response')
})

// PATH Param example
router.get("/profile/:name", function(req, res){
    console.log('Printing the request to find out wjere name is stored',req.params)
    console.log('user name is',req.params.name)
    //console.log(`User requesting for profile is ${name}`)
    res.send("dummy details")
})

// Query Param example
router.get("/shoes", function(req, res){
    console.log("The filter options for shoes are -",req.query)
    //req.query.size
    //req.query.brand
    res.send("dummy shoes response")
})



// Q1.
   // -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing
 // Your route code will look like this

app.get("/sol1", function (req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    let arr= [1,2,3,5,6,7]
    let sum=0;
    for(let i=0;i<arr.length;i++){
     sum=sum+arr[i]
    }
    let n=arr[arr.length-1];
    let naturalSum=n*(n+1)/2
    let missingNumber=naturalSum-sum
    //console.log( missingNumber) 
    ///LOGIC WILL GO HERE 
    res.send(  { data: missingNumber  }  );
});


//Q2. 
//    -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing
//  Your route code will look like this
app.get("/sol2", function (req, res) {
        //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
        let arr= [33, 34, 35, 37, 38]
        let sum=0;
        for(let i=0;i<arr.length;i++){
         sum=sum+arr[i];
        }
        let first=arr[0];
        let last=arr[arr.length-1];
         let n= arr.length +1;
         let naturalnosum=[n*(first+last)/2] ;
        let missingNumber=naturalnosum-sum;

        ///LOGIC WILL GO HERE 

        res.send(  { data: missingNumber  }  );
});
module.exports = router;




