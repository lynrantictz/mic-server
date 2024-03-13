const express = require('express')
const bodyParser = require('body-parser')
const cors = require( "cors" );
const api = require('./routes/api')
require('dotenv').config()
require('./utils/formatResponse');


const app = express()
const port = process.env.APP_PORT

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false }))
app.use( express.urlencoded({ extended: true } ) );
// app.use( cors( { origin: `http://localhost:${ port }` } ) );

app.use('/api', api)
// app.get('*', (req, res) => res.status(404).send({
//     message: 'Nothing to see here',
// }))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})