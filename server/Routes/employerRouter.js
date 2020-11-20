const express = require('express')
const router = new express.Router()
const addEmployers = require('../Controllers/addEmployer')
const getEmployers = require('../Controllers/getEmployer')

router.post('/signupEmployer', addEmployers.addEmployer)
router.post('/loginEmployer', getEmployers.getEmployer)
module.exports = router