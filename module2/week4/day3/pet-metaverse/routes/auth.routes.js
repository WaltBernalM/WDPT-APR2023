const express = require('express');
const userRouter = express.Router();
const { 
    getSignup,
    postSignup,
    getProfile,
    getLogin,
    postLogin,
} = require('../controllers/auth.controller')
const { isLoggedIn, isAdminMiddleware } = require('../middlewares/route-guard.middleware');
/**
 * Signup
 */
userRouter.get('/signup', getSignup)

userRouter.post('/signup', postSignup)

/**
 * Profile
 */
userRouter.get('/profile', isLoggedIn, getProfile)

/**
 * Login
 */

userRouter.get('/login', getLogin)
userRouter.post('/login', postLogin)



/**
 * Logout
 */

userRouter.get("/logout", isLoggedIn, isAdminMiddleware, (req,res,next)=>{
    req.session.destroy((error)=>{
        if(error){
           return  next(error)
        }
        res.redirect("/")
    })
})


module.exports = userRouter;