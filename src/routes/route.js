const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const newAupbController=require("../controllers/apbController1")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)


router.post("/createnewAuthor", newAupbController.createnewAuthor)

router.post("/createnewPublisher", newAupbController.createnewPublisher)

router.post("/createnewBook",newAupbController.createnewBook)

router.get("/getnewBook",newAupbController.newBook)

router.put("/updatadBook",newAupbController.updatadBook )

// const a=async function(req,res,next){
//     console.log("hello")
//     res.send({msg:"haaaa"})
// }
//router.get("/search",newAupbController.search, a)
module.exports = router;