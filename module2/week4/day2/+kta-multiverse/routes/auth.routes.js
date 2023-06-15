const bcryptjs = require('bcryptjs');
const express = require('express');
const userRouter = express.Router();
const User = require('../models/User.model');

const signup = (req, res) => {
    res.render('auth/signup')
}

userRouter.get('/signup', signup )

//                              registerUser
userRouter.post('/signup', async (req, res) => {
    // const { email, password, username } = req.body;
    const userData = req.body;
    console.log(userData);

    // validaciones
    // 1. Darle feedback al usuario de que no puede registrar un correo que ya
    // fue registrado

    const userFound = await User.findOne({ username: userData.username, email: userData.email  })

    console.log('userFound: ', userFound);

    if(userFound) {
        return res.status(400).render('auth/signup', { errorMessage: 'El usuario o correo ya fue registrado' })
    }
    // 1. aqui encriptamos el password (done)
    //  password       sha256
    // 1234w --->               -->        wduw8udjoiu22knmk2nek2nek2edy2
    // syutay --->              -->        wduw8udjoiu22knmk2nek2nek2edy2 
    
    const salt = bcryptjs.genSaltSync(12)
    const encryptedPassword = bcryptjs.hashSync(userData.password, salt);

    // 2. aqui guardariamos esa info en mongoDB
    User
    .create({ username: userData.username , email: userData.email, password: encryptedPassword  })
    .then(savedUser => {
        console.log('El usuario que se creo fue: ', savedUser);
        // redireccionamos a  otra vista
        res.redirect(`/auth/profile/${savedUser._id}`)
    })
})

//                                 profile
userRouter.get('/profile/:userId', (req, res, next) => {
    const { userId } = req.params; // { userId: '1y1w1u2wi1uw1iw1io' }

    User.findById(userId)
    .then(user => {
        console.log('user found: ', user)
        res.render('user/profile', { username: user.username, email: user.email })
    })
    .catch(error => next(error))
    // aca tendríamos que buscar al usuario
    // para mandar sus datos a la vista llamada profile

})

module.exports = userRouter;