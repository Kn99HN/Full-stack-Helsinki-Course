require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const Phone = require('./models/mongo')
app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
    res.send("<h1>Hello world </h1>")
})

app.get('/api/persons', (req, res) => {
    Phone.find({}).then(phones => {
        res.json(phones)
    })
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    Phone.find(id).then(phone => {
        res.json(phone)
    })
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

    const person = new person({
        name: body.name,
        number: body.number,
        id: generateID()
    })

    person.save().then(savedPerson => {
        res.json(savedPerson)
    })
})

app.delete('/api/persons/:id', (req, res) => {
    const id = req.params.id
    console.log(id)
    Phone.findByIdAndDelete(id, (err, phone) => {
        const respose = {
            message: "Successfully deleted",
            id: phone.id
        }
        res.status(200).send(respose)
    })
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`)
})