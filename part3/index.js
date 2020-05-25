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
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
app.use(express.json()) //instantiate json parser
app.use(cors())
const Note = require('./models/note')
const PORT = process.env.PORT


//defining routing and handler
app.get('/', (req, res) => {
    res.send("<h1>Hello world </h1>")
})

//express set the headers appropriately
app.get('/api/notes', (req, res) =>{
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

app.post('/api/notes', (req, res) => {
    const body = req.body
    if(!body.content) {
        return res.status(400).json({
            error: 'content missing'
        })
    }
    const note = new Note({
        content: body.content,
        important: body.important || false,
        date: new Date()
    })
    note.save().then(savedNote => {
        res.json(savedNote)
    })
})

app.get('/api/notes/:id', (req, res) =>{
    Note.findById(request.params.id).then(note => {
        res.json(note)
    })
})

app.delete('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id)
    notes = notes.filter(note => note.id !== id)
    res.status(204).end()
})

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`)
})

