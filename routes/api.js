const express = require('express')
const apiv1 = require('./apiv1')
const app = express()

app.use('/v1', apiv1)


module.exports = app;