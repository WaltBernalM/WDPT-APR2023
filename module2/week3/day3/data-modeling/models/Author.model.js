const { Schema, model } = require('mongoose');
const { bookSchema } = require('./Book.model');

const authorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    country: String,
    // one-to-one usando embeddings
    // book: bookSchema
    // one-to-many usando embeddings
    // books: [bookSchema]
    // one-to-one usando referencias
    // book: { type: mongoose.Schema.ObjectId, ref: 'Book' }
    // one-to-many usando refrencias
    books: [{ type: Schema.ObjectId, ref: 'Book' }]
})

const Author = model('Author', authorSchema);

module.exports = Author;