require('../db'); // este require hace la conexion a la base de datos

const mongoose = require('mongoose');
const Author = require('../models/Author.model');

const authors = [
    {
        name: 'Gabriel Garcia Marquez',
        age: 67,
        country: 'Colombia'
    },
    {
        name: 'Octavio Paz',
        age: 55,
        country: 'Mexico'
    }
];

Author.insertMany(authors)
.then(dbAuthors => {
    console.log(`Se insertaron ${dbAuthors.length} Autores`);
    mongoose.connection.close();
})
.catch(err => console.error('Error durante el seeding de autores', err))

