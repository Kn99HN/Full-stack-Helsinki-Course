/* const http = require('http') => class http library in node

Tradition way using node.
/*
    Defining handler when made to the app.
    The app return 200 status code and 
    content type as text in the headers

const app = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/plain'})
    res.end(JSON.stringify(notes))
})

app.listen(port) */

//Using Express
const notesRouter = require('express').Router()
const Note = require('../models/note')


//express set the headers appropriately
notesRouter.get('/', (req, res) =>{
    Note.find({}).then(notes => {
        res.json(notes)
    })
})

const generateIds = () => {
    const maxId = notes.length > 0 
    ? Math.max(...notes.map(n => n.id)) : 0
    //spread operator, turning arrays into an iterable
    //so we can get a value from the array notes
}

notesRouter.post('/', (req, res) => {
    const body = req.body
    const note = new Note({
        content: body.content,
        important: body.important || false,
        date: new Date()
    })

    /**
     * We use promise chainging as we want to return 
     * a formatted note, the then part returns a Promise. We
     * then register a callback by using another then
     * to retrieve the value in the Promise
     */
    note
        .save()
        .then(savedNote => { return savedNote.toJSON()})
        .then(savedAndFormattedNote => {
            res.json(savedAndFormattedNote)
        })
        .catch(error => console.log(error))
})

notesRouter.get('/:id', (req, res) =>{
    Note.findById(request.params.id)
    .then(note => {
        if(note) {
            res.json(note.toJSON())
        } else {
            res.status(404).end()
        }
    })
    .catch(error => next(error))
})

notesRouter.delete('/:id', (req, res) => {
    Note.findByIdAndRemove(request.params.id)
    .then(() => {
        res.status(204).end()
    })
    .catch(error => next(error))
})

module.exports = notesRouter