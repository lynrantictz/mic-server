const express = require('express')
const { auth } = require('../middleware/auth.middleware');
const loginController = require('../controllers/auth/login.controller');
const { loginValidationHandler } = require('../validators/login.validator');
const app = express()

app.post('/login', loginValidationHandler, loginController.login)
app.post('/logout', auth, loginController.logout)

module.exports = app;