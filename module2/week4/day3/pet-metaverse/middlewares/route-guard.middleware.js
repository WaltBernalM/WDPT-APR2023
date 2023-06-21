// checa si el usuario esta logueado (logged in) cuando trata de entrar a una pagina especifica
const isLoggedIn = (req, res, next) => {
    if (!req.session.currentUser) {
      return res.redirect('/auth/login');
    }else if (req.session.currentUser) {
        req.app.locals.isLoggedIn = true;
    } else {
        req.app.locals.isLoggedIn = false;
    }
    console.log('req.app.locals.isLoggedIn: ', req.app.locals.isLoggedIn);
    next();
  };
  
  // si un usuario que ya esta logueado trata de entrar a la pagina de login
  // lo refirijimos a otro sitio como la galeria de mascotas pa que compre
  const isLoggedOut = (req, res, next) => {
    if (req.session.currentUser) {
      return res.redirect("/pet");
    }
    next();
  };

const isAdminMiddleware = (req,res,next)=>{
    const { role } = req.session.currentUser
    console.log('user role', role)
    if(role === 'Admin') {
        req.app.locals.isAdmin = true 
    } else {
        req.app.locals.isAdmin = false
    }
    console.log('req.app.locals.isAdmin: ', req.app.locals.isAdmin);

    next()
}


const roleMiddleware = (roles) => {
    return (req, res, next) => {
        const { role } = req.session.currentUser

        if(roles.includes(role)) {
            next()
        } else {
            return res.redirect();
        }
    }
}


  module.exports = {
    isLoggedIn,
    isLoggedOut,
    isAdminMiddleware,
    roleMiddleware
  };