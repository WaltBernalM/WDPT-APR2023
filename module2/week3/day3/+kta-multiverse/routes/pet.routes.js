const express = require('express');
const Pet = require('../models/Pet.model');
const petRouter = express.Router();


// Listar mascotas
petRouter.get('/', (req, res) => {
    Pet.find()
    .then(pets => {
        res.render('pet/petList', { pets })
    })
})


// pet detail
petRouter.get('/:id/detail', (req, res, next) => {
    const { id }  = req.params;
    Pet.findById(id)
    .then(pet => {
        res.render('pet/petDetail', { pet })
    })
    .catch(error => next(error))
})


// delete
petRouter.get('/:id/delete', (req, res) => {
    const { id } =req.params;
    console.log('pet id: ', id);
    Pet.findByIdAndDelete(id)
    .then(() => res.redirect('/pet'))
    .catch(error => next(error))
})


// Update
petRouter.get('/:id/update', (req, res) => {
    const { id, price } =req.params;
    console.log('pet id: ', id);
    Pet.findByIdAndUpdate(id, { price })
    .then(() => res.redirect('/pet'))
    .catch(error => next(error))
})


module.exports = petRouter;