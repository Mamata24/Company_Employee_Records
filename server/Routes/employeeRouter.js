const express = require('express')
const router = new express.Router()
const getAllEmployees = require('../Controllers/getAllEmployee')

router.post('/allemployees', getAllEmployees.getAllEmployee)
module.exports = router