const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
// const cookieParser=require('cookie-parser');


async function registerUser(req, res) {
    const { username, email, password } = req.body;


    if (!username || !email || !password) {
        return res.status(400).json({
            message: "All Fields are required.."
        })
    }


    const hashedPassword = await bcrypt.hash(password, 12);


    const existingUser = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    });

    // console.log(existingUser);


    if (existingUser) {
        if (existingUser.username == username) {
            return res.status(400).json({
                message: "Username already exists"
            })
        }
        else {
            return res.status(400).json({
                message: "Email already exists"
            })
        }
    }

    const user = await userModel.create({
        username,
        email,
        password: hashedPassword
    });





    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET);


    res.cookie("cookie-token", token)


    res.status(201).json({
        message: "User registered Successfully",
        user
    });

};


module.exports = { registerUser };