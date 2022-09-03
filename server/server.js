const path = require('path')
const express = require('express')
const entries = require('./routes/routes')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))
server.use(express.json())
server.use('/v1/entries', entries)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server
