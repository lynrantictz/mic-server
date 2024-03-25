const express = require('express');
const {employeeValidationHandler} = require('../../validators/employee.validator');
const employeeController = require('../../controllers/employer.controller')
var app = express();
var router = express.Router();

router.post('/register', employeeValidationHandler, employeeController.register)

module.exports = router