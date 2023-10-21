const express = require("express");
const { getAllUsers, registerController, loginController } = require("../controllers/userController");

const router = express.Router();

// get all users
router.get('/all-users', getAllUsers);

// create or register an user
router.post('/register', registerController);

// login an user
router.post('/login', loginController);

module.exports = router;