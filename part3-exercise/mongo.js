const mongoose = require('mongoose')

if(process.argv.length < 3) {
    console.log('Please provide password as arg')
    process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://kn99hn:${password}@cluster0-yxygq.mongodb.net/phone-app?retryWrites=true&w=majority`

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})

const phoneSchema = new mongoose.Schema({
    name: String,
    number: String
})

const Phone = mongoose.model('Phone', phoneSchema)

if(process.argv.length == 3) {
    Phone.find({}).then(result => {
        console.log('phonebook')
        result.forEach(phone => {
            console.log(`${phone.name} ${phone.number}`)
        })
        mongoose.connection.close()
    })
} else {
    const name = process.argv[3]
    const number = process.argv[4]
    const phone = new Phone({
        name: name,
        number: number
    })
    phone.save().then(result => {
        console.log(`Added ${name} number ${number} to phonebook`)
        mongoose.connection.close()
    })
}
