const { mountpath } = require('../../part4c-exercise/app')

const entryRouter = require('express').Router()

entryRouter.get('/', (request, response) => {
    response.json(
        'Welcome to Blog API'
    )
})

module.exports = entryRouter