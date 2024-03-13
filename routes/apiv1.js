const express = require('express')
const loginController = require('../controllers/auth/login.controller')
const app = express()

app.use('/login', loginController.login)


module.exports = app;