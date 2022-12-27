const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const commonMW = require ("../middlewares/commonMiddlewares")
const productController=require("../controllers/productController")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//router.post("/createBook", commonMW.abc, BookController.createBook  )
//router.post("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.abc, UserController.basicCode, commonMW.mid4)

//- Write a POST api to create a product from the product details in request body.
router.post("/createProducts", productController.createProduct)

module.exports = router;