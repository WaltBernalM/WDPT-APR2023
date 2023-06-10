const listUser =( req, res) => {
    // vamos a buscar a todos nuestros usuarios registrados

    User.find()
    .then(users => {
        console.log('users: ', users)// { users: users }
        res.render("user/listUsers", { users } );
    })
}

module.exports = {
    listUser
}