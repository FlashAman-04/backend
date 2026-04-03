const express=require('express');
const authController=require('../controllers/auth.controllers');

const router=express.Router();


// logic of api is written in controller folder and we are calling that logic here in routes file
router.post('/register', authController.registerUser);


module.exports=router;