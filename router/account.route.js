const express = require('express');
const router = express.Router();
const {createUser , deleteUser , getUser , updateUser}= require('../controller/account.controller');
// Create User
router.post("/createAccount" ,createUser);

// Delete User
router.delete("/deleteAccount/:id" , deleteUser);

// Get User
router.get("/getAccount/:id" , getUser);

// Update User
router.put("/updateAccount/:id" , updateUser);

//Error Handler

router.all("*" , (req , res , next) => {
    const err = new Error("Page Not Found");
    err.status = 404,
    next(err)
})



module.exports = router;

// res.status(404).send(`Endpoints Are :\n ${req.hostname}/createUser,\n ${req.hostname}/updateUser,\n ${req.hostname}/getUser,\n ${req.hostname}/deleteUser,\n`)
