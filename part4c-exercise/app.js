const config = require('./utils/config')
const express = require('express')
// require('express-async-errors')
const app = express()
const cors = require('cors')
const notesRouter = require('./controllers/notes')
const usersRouter = require('./controllers/users')
// const middleware = require('./utils/middleware')
// const logger = require('./utils/logger')
const mongoose = require('mongoose')

console.log('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
// app.use(middleware.requestLogger)

app.use('/api/users', usersRouter)
app.use('/api/notes', notesRouter)

// app.use(middleware.unknownEndpoint)
// app.use(middleware.errorHandler)

module.exports = app