require('./db')

const  { Book } = require('./models/Book.model');
const Author = require('./models/Author.model');

const main = async () => {

    let name = 'Gabriel Garcia Marquez';

    // // Para añadir libros que le pertenecen al author Gabriel Garcia Marquez
    // // 1. Buscamos al author que escribio el libro
    const GabrielGarciaMarquez = await Author.findOne({ name  })
    console.log('GabrielGarciaMarquez: ', GabrielGarciaMarquez);

    // 2. Creamos el libro en la collection Book
    const cienAños = await Book.create({ title: 'Cien años de soledad' })

    // 3. Guardamos el libro en el array books del author
    //                                      GabrielGarciaMarquez.books.push(cienAños._id)
    const updatedGabriel = await Author.findByIdAndUpdate(GabrielGarciaMarquez._id, { $push: { books: cienAños._id } }, { new: true } )

    console.log('updatedGabriel: ', updatedGabriel);


    name = 'Octavio Paz';
    const OctavioPaz = await Author.findOne({ name  });
    const elLaberinto = await Book.create({ title: 'El laberinto de la soledad' });
    const updatedOctavio = await Author.findByIdAndUpdate(OctavioPaz._id, { $push: { books: elLaberinto._id } }, { new: true } )
    console.log('updatedOctavio: ',  updatedOctavio);


    // populating:  Nos permite pasar de referencias a embeddings en el resultado final (No en la base de datos) 
    // .populate()  este metodo no altera la base de datos, solo lo que devuelbe

    const populatedAuthors = await Author.find().populate({ path: 'books', path: 'publishers' })
    console.log('populatedAuthors: ', JSON.stringify(populatedAuthors));

}

main();



// User, Contact, Access

const populatedUsers = await User.find().populate({ path: 'contact', path: 'access' })

console.log('populatedUsers: ', JSON.stringify(populatedUsers));

// el resultado sería

[
    {
        name: 'Some name',
        contact:{
            _id: Object('212u18'),
            email: 's@gmail.com',
            phone: '1111-111-11'
        },
        access: {
            _id: Object('equiw11'),
            level: 2,
            group: 'Admin'
        }
    },
    {
        name: 'Roberto',
        contact:{
            _id: Object('e8u1i'),
            email: 'rob@gmail.com',
            phone: '22222-111-11'
        },
        access: {
            _id: Object('89738iu'),
            level: 5,
            group: 'dev'
        }
    }
]
