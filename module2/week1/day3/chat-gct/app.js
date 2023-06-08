const express = require('express');

// inicializamos un server llamado app
const app = express();

// express.static sirve para indicar cual es el directorio con los archivos esticos
app.use(express.static('public'));
// app.use es un middleware . Vean a un middleware como un portero o interceptor que
// tiene acceso a todos los requests y responses 

// desde la barra de navegacion de los browsers solo se pueden hacer peticiones con el verbo GET
// por eso para la nevagacion entre paginas solo usamos GET
// app.get('/home', (request, response, next) => {
//     response.send('<h1>chatGCT (El Gran Clarividente)</h1>')
// })

app.get('/home', (request, response, next) => {
    console.log('__dirname: ', __dirname);
    // __dirname localiza la ruta donde esta app.js (o la raiz del proyecto)
    response.sendFile(__dirname + '/views/home-page.html')
    //           |
    // sendFile requiere la ruta completa al file a servir, si no falla
    // por eso usamos __dirname
})


// app.get('/clarividente', (request, response) => {
//     response.send(`
//     <!doctype html>
//     <html>
//       <head>
//         <meta charset="utf-8">
//         <title>Clarividente</title>
//         <link rel="stylesheet" href="/stylesheets/style.css" />
//       </head>
//       <body>
//         <h1>Clarividente</h1>
//         <p>Preguntale a la clarividente todas tus dudas existenciales</p>
//         <img src="/images/clarividente.png" />
//       </body>
//     </html>
//   `);
// })


app.get('/clarividente', (request, response) => {
    response.sendFile(__dirname + '/views/chat-gtc.html');
})

// POST se usa mas en formularios o en clientes http que nos permiten enviar datos.

app.listen(3000, () => {
    console.log('El servidor ya esta corriendo en el puerto 3000 🏃‍♀️')
})


