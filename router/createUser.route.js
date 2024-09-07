// Imported modules
const express = require('express');
const router = express.Router();
const createUser = require('../controller/createUser.controller');
// Create User Router
router.post("/" , createUser)
module.exports = router