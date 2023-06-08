// importen los paquetes express y hbs
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan')
const hbs = require('hbs')

// creamos una app de express
const app = express()


// aplciamos un dummy middleware
// app.use(myFakeMiddleware);

// aplicamos el seteador de secretos
app.use(setSecretMiddleware);

// implementamos un logger mas pro
app.use(morgan('dev'))

// configuramos body parser
app.use(bodyParser.urlencoded({ extended: true }))

// configuramos la carpeta que tendra nuestro codigo estatico
app.use(express.static('public'))

// configuramos handlebars
// configuramos el motor de vistas dinamicas
app.set('view engine', 'hbs')
// le decimos donde buscar las vistas
app.set('views', `${__dirname}/views`)

// const spotifyApi = new SpotifyWebApi({
//     clientId: CLIENT_ID,
//     clientSecret: CLIENT_SECRET
//   });

console.log('CLIENT_ID: ', process.env.CLIENT_ID)
console.log('CLIENT_SECRET: ', process.env.CLIENT_SECRET)
console.log('HOLA: ', process.env.HOLA)

// En la ruta raiz sirvan el index.hbs para ver que todo funciona
app.get('/', (req, res) => {
    console.log('secreto desde la ruta raiz: ', req.secretValue)
  res.render('index')
})

/**
 * Route params
 */



app.get('/price', (req, res) => {
    res.send({ message: 'la subscripcion a spotichaf cuesta $1000 us'})
})

app.get('/albums/:album', (req , res) => {
    console.log('params: ', req.params)
    console.log('query: ', req.query)
    res.send(req.params);
})

app.get('/albums/:album/artists/:artist', (req, res) => {
    res.send(req.params)
})



// app.get('/:notFoundPage', (req, res) => {
//     res.send({ message: 'page not found 404' })
// })

/**
 * Query strings
 */

app.get('/search', (req, res) => {
    console.log('query: ', req.query)
    res.render('results', req.query)
})


/**
 * Post
 */

app.get('/login', (req, res) => {
    console.log('Estoy en el POST')
    res.render('login')
})

app.post('/login', validatePassword,(req, res) => {
    console.log('Estoy en el POST')
    // asi era en ES5
    // const username = req.body.username;
    // const hobbies = req.body.hobbies;
    // asi es despues de ES6
    const { username, hobbies } = req.body;
    console.log(req.body) // <- la data de un POST llega en este objeto
    res.render('profile', { username, hobbies } ) //<- Esto no se debe hacer
})


/**
 * Middleware
 */

// function myFakeMiddleware(req, res, next) {
//     console.log('myFakeMiddleware was called!');
//     next()
//   }

function validatePassword(req, res, next) {
    console.log('validatePassword was called!!')
    const { password} = req.body;
    if(password !== '123456') {
        res.send('El password es invalido')
    }
    next()
}

function setSecretMiddleware(req, res, next) {
    console.log('setSecretMiddleware was called!!')
    req.secretValue = { secret: 'secreto!!!!'};
    next();
}

// inicialicen el servidor para escuchar
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`🏃‍♀️ on port ${PORT}`))