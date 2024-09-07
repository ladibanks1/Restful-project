const express = require('express');
const getUser = require('../controller/getUser.controller');
const router = express.Router()

// Route to get User

router.get("/:id" , getUser)

module.exports = router