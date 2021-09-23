const express = require('express')

const config = require('../config')
const user = require('./components/user/network')

const app = express()

// middlewares
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))

// router
app.use('/api/user', user)

// server
app.listen(config.api.port, () => {
  console.log('listen port ' + config.api.port)
})