 const express = require('express')
 const router = express.Router();

 const {loginUser, signupUser} = require('../controllers/userController') 
 //Bring in the user model

 //login router
router.post("/login", loginUser )

 //signup router
 router.post("/signup", signupUser )

 module.exports = router

 