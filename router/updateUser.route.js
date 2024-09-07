const express = require('express');
const router = express.Router();
const updateUser = require('../controller/updateUser.controller');
router.put("/:id" , updateUser)
module.exports = router