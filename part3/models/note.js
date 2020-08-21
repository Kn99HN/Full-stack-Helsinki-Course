const mongoose = require('mongoose')

// validating at db level
const noteSchema = new mongoose.Schema({
    content: {
        type: String,
        minlength: 5,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
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

