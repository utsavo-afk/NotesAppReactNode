const mongoose = require('mongoose')

/**
 * ! The process.argv property returns an array containing the 
 *  command-line arguments passed when the Node.js process was launched.
 * * node index.js one two three four
    /usr/local/bin/node: 0
    /home/utsav/Desktop/filesystem/react-projects/notes-app/db-test/index.js: 1
    one: 2
    two: 3
    three: 4
    four: 5
 * process.argv.forEach((val, index) => {
    console.log(`${val}: ${index}`);
    })
*/

if (process.argv.length < 3) {
    console.log(`please provide <password> as an argument: node index.js <password>`)
}

const password = process.argv[2]

const url = `mongodb+srv://fullstack:${password}@fullstackopen2021.awzzl.mongodb.net/notes-app-db?retryWrites=true&w=majority`

// ! You can connect to MongoDB with the mongoose.connect() method.
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

/**
 * schema
 * Each schema maps to a MongoDB collection
 * schema defines the shape of the documents within that collection.
*/
const noteSchema = new mongoose.Schema({
    content: String,
    date: Date,
    important: Boolean,
})

/**
 * model
 * When you call mongoose.model() on a schema, Mongoose compiles a model for you.
 * first argument is the singular name of the collection your model is for
 * Models are fancy constructors compiled from Schema definitions.
 * An instance of a model is called a document.
 * collection wil be named lowercased plural of the model 'Note' -> notes
*/
const Note = mongoose.model('Note', noteSchema)

// create a note document
// const note = new Note({
//     content: 'Kny3',
//     date: new Date(),
//     important: true,
// })

// finding notes
Note.find({ important: true })
    .then(res => {
        console.log('---');
        res.forEach(note => console.log(note))
        console.log('---');
        mongoose.connection.close()
    })
//

// save doc to database
// note.save().then(result => {
//     console.log('note: ', result);
//     console.log('note saved!')
//     mongoose.connection.close()
// })