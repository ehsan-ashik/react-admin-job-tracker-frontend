const express = require('express')
var cors = require('cors')
const { createAccountSas } = require('./blob')
const app = express()
const port = 5000

app.use(cors())

app.get('/', (req, res) => {
    const sasToken = createAccountSas()
    res.send({sasToken})
})

app.listen(port, () => {
  console.log(`Azure permission service is listening on port: ${port}`)
})