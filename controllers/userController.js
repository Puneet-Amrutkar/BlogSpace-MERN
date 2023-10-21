const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');

// get all users
exports.getAllUsers = async (req, res) => {
    try
    {
        const users = await userModel.find();

        res.status(201).json({
            userCount:users.length,
            success:true,
            users,
        });
    }
    catch(error)
    {
        console.log(error);
        return res.status(500).send({
            message:"error in fetching users",
            success:false,
            error
        })
    }
};

// register user
exports.registerController = async (req, res) => {
    try
    {
        const { username, email, password } = req.body;
        
        // validation
        if(!username || !email || !password)
        {
            return res.status(400).send({
                message:"please fill all the fields",
                success:false,
            })
        }

        // existing user
        const existingUser = await userModel.findOne({email});
        if(existingUser)
        {
            return res.status(500).send({
                message:"user already exists",
                success:false,
                error
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        // save new user

        // const newUser = await userModel.create(req.body);
        const newUser = new userModel({ username, email, password: hashedPassword});
        await newUser.save();

        res.status(201).json({
            success:true,
            newUser
        })
    }
    catch(error)
    {
        console.log(error);
        return res.status(500).send({
            message:"error in register",
            success:false,
            error
        })
    }
};

// login
exports.loginController = async (req, res) => {
    try
    {
        const { email, password } = req.body;
        
        // validation
        if(!email || !password)
        {
            return res.status(400).send({
                message:"please fill all the fields",
                success:false,
            })
        }

        const user = await userModel.findOne({email});
        if(!user)
        {
            return res.status(500).send({
                message:"email not registered",
                success:false,
            })
        }

        // password matching
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch)
        {
            return res.status(401).send({
                message:"invalid username or password",
                success:false,
            })
        }
        
        return res.status(201).json({
            success:true,
            user,
        })
    }
    catch(error)
    {
        console.log(error);
        return res.status(500).send({
            message:"error in register",
            success:false,
            error
        })
    }
};