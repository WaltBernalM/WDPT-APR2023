const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const User = require('../models/User.model');

/**
 * Signup
 */

// GET
const getSignup = (req, res) => {
    res.render('auth/signup')
}

// POST
const postSignup = async (req, res) => {
    const { password, confirmPassword, email, username } = req.body;

    try {
        if(!email) {

            return res.render('auth/signup', { errorMessage: 'El email es obligatorio' })
        }

        if(!username) {
            return res.render('auth/signup', { errorMessage: 'El campo username es obligatorio' })
        }

        if(!password || !confirmPassword) {
            return res.render('auth/signup', { errorMessage: 'El campo password y confirm password son obligatorios' } )
        }

        console.log('email', email);
        console.log('username', username);
        console.log('password', password);
        console.log('confirmPassword', confirmPassword);
        if(password !== confirmPassword) {
            return res.render('auth/signup', { errorMessage: 'Los passwords no coinciden' } )
        }

        // validamos si el email ya fue registrado en la app
        // si encontro a un user lo regresa, si no regresa null
        const found = await User.findOne({ email });


        console.log('found', found);
        
        if(found) {
            return res.render('auth/signup', { errorMessage: 'El email ya fue registrado' } )
        }

        // make sure passwords are strong:
        const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        if (!regex.test(password)) {
            res
            .status(500)
            .render('auth/signup', { errorMessage: 'El password necesita tener al menos 6 caracteres y debe contener al menos, un numero, una letra minuscula y una mayuscula' });
            return;
        }

        // Encriptación del password
        const salt = bcrypt.genSaltSync(12);
        const encryptedPassword = bcrypt.hashSync(password, salt);
        // creamos al user
        const userCreated = await User.create({ email, username, password: encryptedPassword });
        const loggedUser = userCreated.toObject();
        delete loggedUser.password;
        // guardamos al user en el req.session
        req.session.currentUser = loggedUser;
        res.redirect(`/auth/profile}`);
    } catch (error) {
        // si el error fue causado por una violación en algun validador de mongoose
        if (error instanceof mongoose.Error.ValidationError) {
            res.status(500).render('auth/signup', { errorMessage: error.message });
        } else {
            next(error);
        }
    }

}


/**
 * profile
 */
const getProfile = async (req, res, next) => {
    try {
        console.log('req.session.currentUser', req.session.currentUser);
        const user = req.session.currentUser;
        res.render('user/profile', { user })
    } catch (error) {
        next(error)
    }
}

/**
 * Login
 */

const getLogin = (req, res) => {
    res.render('auth/login')
}


const postLogin = async (req, res, next) => {
    console.log('SESSION =====> ', req.session);

    const { email, password } = req.body;

    try {
        if(!email)
            return res.render('auth/login', { errorMessage: 'El campo email es requerido' })
        if(!password)
            return res.render('auth/login', { errorMessage: 'El campo password es requerido' })

        // buscamos al usuario y checamos:
        // 1. El email existe?
        // 2. Las conreaseñas coincide?

        const user = await User.findOne({ email });
        if(!email) {
            return res.render('auth/login', { errorMessage: 'El email o password son incorrectos' })
        }
        // -> true | false
        const match = bcrypt.compareSync(password, user.password)
        console.log('match: ', match)
        if(match) {
            const loggedUser = user.toObject();
            delete loggedUser.password;
            // guardamos al user en el req.session
            req.session.currentUser = loggedUser;
            console.log('')
            // return res.render('user/profile', { email })

            return res.redirect(`/auth/profile`)
        }

        res.render('auth/login', { errorMessage: 'El email o password son incorrectos' })
        
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            res.status(500).render('auth/signup', { errorMessage: error.message });
        } else {
            next(error);
        }    
    }
}

/**
 * Logout
 */


module.exports = {
    getSignup,
    postSignup,
    getProfile,
    getLogin,
    postLogin
}