/**
 * C: create 
 * R: read
 * U: update
 * D: delete
 */

const express = require('express');
const User = require('../models/User.model')
const userRoutes = express.Router();

// listar todos los usuarios de la colection user
// GET: /user
userRoutes.get('/', (req, res) => {
    // vamos a buscar a todos nuestros usuarios registrados

    User.find()
    .then(users => {
        console.log('users: ', users)// { users: users }
        res.render("user/listUsers", { users } );
    })
})

// desplegar el formulario para registrar usuarios
// GET: /user/create
userRoutes.get('/create', (req, res) => {
    res.render("user/registerUser");
})


// Ir al detalle del usuario
// GET: /user/:id/detail
userRoutes.get('/:id/detail', (req, res) => {
    const { id } = req.params;
    User.findById(id)
    .then(user => {
        console.log('el user con id ', id, 'es: ', user);
        res.render('user/userDetail', { user })
    })
    .catch(error => next(error))
})

//
// req.params
// req.query
// req.body   <--- lo que se manda POST llega por el body

// create

userRoutes.post('/create', (req, res) => {
    // User.create(req.body)
    /**
     * const { username, email, password } = req.body;
     * User.create({ username, email, password })
     */

    const { username, email, password } = req.body;
    User.create({ username, email, password })
    .then(userCreated => {
        console.log('usuario creado: ', userCreated)

        res.redirect('/user')
    })
    .catch(error => next(error))
    // res.status(200).json(req.body)

})






// exportamos el userRoutes

module.exports = userRoutes;
