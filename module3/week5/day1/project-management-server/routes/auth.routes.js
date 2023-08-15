// commonJS
const express = require('express');
const { 
    verifyController, 
    loginController, 
    signupController 
} = require('../controllers/auth.controller');

const { Router } = express;

const router = Router();


// POST /auth/signup
router.post('/signup', signupController)

// POST /auth/login
router.post('/login', loginController)


// GET /auth/verify
router.get('/verify', verifyController)


module.exports = router;