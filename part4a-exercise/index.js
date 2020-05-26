const http = require('http')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

const server = http.createServer(app)


const PORT = 3003
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})