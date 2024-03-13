const express = require('express')
const { auth } = require('../middleware/auth.middleware');
const loginController = require('../controllers/auth/login.controller')
const app = express()

app.post('/login', loginController.login)
// app.post('/logout', auth, loginController.logout)

module.exports = app;