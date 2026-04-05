const express = require('express');
const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');
const dotenv = require('dotenv');


dotenv.config()

const router = express.Router();

router.post('/create', async (req, res) => {
    const token = req.cookies.token;

    console.log(token);

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized"
        })
    }


    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);

        const user = await userModel.findById({
            _id: decoded.id
        })

        console.log(user);
    } catch (err) {
        console.log(err)
        return res.status(401).json({
            message: "Token is not valid!"
        })
    }


    // console.log(user);



    res.status(200).json({
        message: "Post created successfully"

    })
})



module.exports = router;
