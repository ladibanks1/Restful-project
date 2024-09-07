const express = require('express');
const router = express.Router()
const deleteUser = require('../controller/deleteUser.controller');
// Delete Document By Id
router.delete("/:id" , deleteUser)
module.exports = router