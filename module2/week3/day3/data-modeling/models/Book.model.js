const { Schema, model } = require('mongoose');


const bookSchema = new Schema({
    title: {
        type: String,
        require: true
    }
})


const Book = model('Book', bookSchema);

module.exports = {
    Book,
    bookSchema
};