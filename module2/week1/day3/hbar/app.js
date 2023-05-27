// ¿Como creamos un servidor de express?
// 1. importar el modulo de express y asignarlo a una variable
const express = require('express');

// 2. inicializar el modulo y asignarlo a una variable
const app = express();


console.log(__dirname)
// set sirve para configurar a express, y son valores determinados
// en esta configuracion, express sabe donde buscar las vistas
app.set("views", __dirname + "/views")
// en esta segunda configuracion express sabe que motor de vistas usar para generar
// el html
// le digo a express que genere el html usando el motor de vistas llamado handlebars (hbs)
app.set("view engine", "hbs")
// aca usamos hbs en lugar de otras opciones como ejs, o mustache

/**
 * Recordatario
 * En node vimos: .write()  // su usa para hacer render de strings
 * En express el equivalente a .write era send()
 * y con .sendFile(__dirname + /ruta/al/html) para enviar html al cliente
 * Con handlebars (hbs) vamos a usar
 * .render() el cual sirve para generar html de forma dinamica a partir de archivos .hbs
 */


app.get('/', (reaq, res, next) => {

    const me = {
        name: 'Eduardo',
        lastName: 'Chavez',
        pets: [
            {
                name: 'cathy',
                kind: 'turtle',
                status: 'dead' // alive
            }
        ],
        work: 'software developer'
    }

    res.render('index', me)
})
app.get('/other', (reaq, res, next) => {

    const me = {
        name: 'Elena',
        lastName: 'Dup',
        pets: [
            {
                name: 'rose',
                kind: 'dog',
                status: 'alive' // alive
            },
            {
                name: 'tom',
                kind: 'cat',
                status: 'alive' // alive
            }

        ]
    }

    res.render('index', me)
})



// 3. hacemos que nuestro servidor empiece a escuchar requets
app.listen(3000, () => console.log('El servidor ya esta corriendo'))

