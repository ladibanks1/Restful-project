const express = require('express');
const router = express.Router()
router.all("/" , (req , res) => {
    res.status(404).send(`Endpoints Are :\n ${req.hostname}/createUser,\n ${req.hostname}/updateUser,\n ${req.hostname}/getUser,\n ${req.hostname}/deleteUser,\n`)
})
module.exports = router