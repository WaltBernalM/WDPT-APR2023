// 1. importar el modulo de mongoose
const mongoose = require('mongoose');
const pets = require('./pets.json');
const User = require('./models/User.model');


const Pet = mongoose.model('Pet', {
    type: String,
    breed: String,
    age: Number,
    weight: Number,
    gender: String,
    name: String,
    isAvailable: Boolean
})

// 2. conectarse a la db de mongo


//                protocol    host:port      db name
//                   |           |            |            
mongoose.connect('mongodb://localhost:27017/pets')
.then(x => console.log(`Conectado a mongo!, base de datos: ${x.connection.name}`))
.then(() => Pet.deleteMany())
.then(() => {

    let cheems = new Pet({
        type: 'dog',
        breed: 'shiba inu',
        weight: 5,
        gender: 'male',
        name: 'cheems',
        isAvailable: true
    })
    
    /**
     * CRUD
     */
    
    // create
    // .save()
    // .create()
    // .insertMany()
    
    cheems.save()
    // .then(cheems => console.log('cheems: ', cheems))
    .catch(error => console.log('cheems error: ',error))
    
    // aca ya habia terminado deleteMany
    
    // .create guarda directamente en la coleccion
    Pet.create({
        type: 'dog',
        breed: 'shiba inu',
        weight: 25,
        gender: 'male',
        name: 'buff',
        isAvailable: false
    })
    // .then(buff => console.log('buff: ', buff))
    

    // bulk insertions
    Pet.insertMany(pets)
    // .then(pets => console.log('creted pets: ', pets))
    .catch(error => console.log('pets error: ',error))

    // Read
    // acceso a la query bar
    //      |
    Pet.find()
    // .then(pets => console.log('find pets: ', pets))
    .catch(error => console.log('find error: ',error))

    Pet.find({ name: 'cathy' })
    // .then(cathy => console.log('cathy: ', cathy))
    .catch(error => console.log('find error: ',error))

    // find({ ...filtro }) // => trae los documentos que hance match con el filtro
    // findById(id) // => busca el documento por id     <--- este es preferido porque es especifico
    // findOne({ ...filtro })  // => busca por la primera coincidencia



    // Update
    //                 { name: 'cathy' }, {"isAvailable": true}
    // findOneAndUpdate({ ...filtro }, { ...newData })  // => busca primera coincidencia y la actualiza
    // findByIdAndUpdate() // => busca el documento por id y lo actualiza

    Pet.findOneAndUpdate({ name: 'cathy' }, {"isAvailable": true})
    // .then(pet => console.log('la mascota fue actualizada', pet))
    .catch((error) => console.log('error on update: ', error))

    // Delete
    // deleteMany() // => borra todo si no pasamos parametros
    // deleteMany({...filter }) // borra todas las coincidencias   
    // deleteOne({ ...filter }) // => borra la primera coincidencia
    
    // Create User
    User.create({
        name: 'Elena',
        email: 'el@gmail.com',
        password: '87654321',
        role: 'Admin'
    })
    .then(user => console.log('el nuevo usuario que se guardo es: ', user))
    .catch(error => console.log('error on create: ',error))
    


})
.catch(err => console.error(err))
.finally(() => {});

