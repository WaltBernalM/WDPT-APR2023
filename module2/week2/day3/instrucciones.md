# Spotichaf

## Estrutura del proyecto

creen un directorio llamado `mvc` y dentro un file llamado `app.js` 

```
$ mkdir mvc
$ cd mvc
$ touch app.js
.
├── controllers
├── models
├── public
├── routes
├── views
└── app.js
```
















## init node project

1. inicialicen un proyecto de node 

```sh
npm init -y
```
2. instalen los siguientes paquetes: `express`,  `hbs`, `mongoose`
3. installen `nodemon` y `morgan` como dependencia de desarrollo 
4. Creen un file `layout.hbs` en la carpeta `views` con el sig content

```hbs
<!-- que esto se los genere VS code -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  {{{body}}}
</body>
</html>
```

5. Creen un `index.hbs` dentro de `views` con el siguiente contenido

```hbs
<h1>Spoti Chaf</h1>
```




## configuración de un servidor de express

dentro de `app.js` escriban:

```js
// importen los paquetes express y hbs
const express = require('express')
const hbs = require('hbs')

// creamos una app de express
const app = express()

// configuramos la carpeta que tendra nuestro codigo estatico
app.use(express.static('public'))

// configuramos handlebars
// configuramos el motor de vistas dinamicas
app.set('view engine', 'hbs')
// le decimos donde buscar las vistas
app.set('views', __dirname + 'views')


// En la ruta raiz sirvan el index.hbs para ver que todo funciona
app.get('/', (req, res) => {
  res.render('index')
})

// inicialicen el servidor para escuchar
app.listen(3000, () => console.log(`🏃‍♀️ on port 3000`))
```