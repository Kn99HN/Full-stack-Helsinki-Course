const mongoose = require('mongoose')

const url = process.env.MONGODB_URI
console.log('connecting to', url)
// const url = 
// `mongodb+srv://kn99hn:${password}@cluster0-yxygq.mongodb.net/note-app?retryWrites=true&w=majority`

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
.then(result => {
    console.log('connected to MongoDB')
})
.catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
})


const noteSchema = new mongoose.Schema({
    content: String,
    date: Date,
    important: Boolean
})

/**
 * We transform the note schema to set the returnedObject id
 */
noteSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

//only Note models are public to other files
module.exports = mongoose.model('Note', noteSchema)

