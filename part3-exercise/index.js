const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors())
let phones = [
    { 
      "name": "Arto Hellas", 
      "number": "040-123456",
      "id": 1
    },
    { 
      "name": "Ada Lovelace", 
      "number": "39-44-5323523",
      "id": 2
    },
    { 
      "name": "Dan Abramov", 
      "number": "12-43-234345",
      "id": 3
    },
    { 
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122",
      "id": 4
    }
  ]


app.get('/', (req, res) => {
    res.send("<h1>Hello world </h1>")
})

app.get('/api/persons', (req, res) => {
    res.json(phones)
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = phones.find(person => person.id === id)
    if(person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
})

app.get('/info', (req, res) => {
    const length = phones.length
    const date = new Date()
    res.send(
        `<div>There are currently ${length} entries in the phonebook</div>
        <br/>
        <div> ${date} </div>`
    )
})

const generateID =  () => {
    return Math.floor((Math.random() * 1000) + phones.length + 1)
}

app.post('/api/persons', (req, res) => {
    const body = req.body
    if(!body.name || !body.number) {
        return res.status(400).json({
            error: 'missing values'
        })
    }
    
    if(phones.find(phone => phone.name === body.name)) {
        return res.status(400).json({
            error: 'duplicate values'
        })
    }

    const person = {
        name: body.name,
        number: body.number,
        id: generateID()
    }

    phones = phones.concat(person)
    res.json(phones)
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    phones = phones.filter(phone => phone.id !== id)
    res.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`)
})