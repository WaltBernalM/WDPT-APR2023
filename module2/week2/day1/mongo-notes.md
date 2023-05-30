# DB


## conceptos de BD 

El termino bases de datos se refiere a una de las sig dos cosas:

* El servidor encargado en correr el software cuya tarea es almacenar los datos

* La coleccion de datos que estaremos guardando en el servidor


Cuando instalan mongo se instala un CLI (Command Line Interface) llamado `mongosh` para interactuar con la base de datos

Nosotros instalamos `Compass` para usar una GUI


En el CLI nos connectamos ejecutando

```sh
mongosh
```


mostrar bases de datos en el CLI
```sh
show dbs
```

para salir del CLI
```sh
exit
```


para detener a la db de mongo
```sh
 brew services stop mongodb-community      
```

```
use testDB
```


```
show collections
```


```
db.users.find()
```

find nos da acceso a la query bar

```
db.movies.find({ title: "Interstellar" })
```

### Projections

* Projection
En el GUI
```
{ _id: 0,  title: 1, year: 1, rate: 1  }
```
En el CLI

```
db.movies.find({ title: "Interstellar" }, { _id: 0,  title: 1, year: 1, rate: 1  })
```

```sh
db.movies.find({ title: "Interstellar" }).projection({ _id: 0,  title: 1, year: 1, rate: 1  })
```

* sort
```
db.movies.find().projection({ _id: 0,  title: 1, year: 1, rate: 1  }).sort({ year: -1, rate: -1  })
```


## Anatomia de una Query

```js
//campo sobre el que hacemos la query
// |
{ field: { $op:  value } }
//          |       |
//      operador  valor
```

* `$eq`

```sh
{ title: { $eq: "Interstellar" } }
```

* `$ne`

```sh
{ title: { $ne: "Interstellar" } }
```

* `$and`

```
{ $and: [{ year: "2000" }, { rate: "8.5" }] }
```

```
{ year: "2000"  ,  rate: "8.5" }
```

* `$or`

{ $or: [{ year: "2000" }, {rate: "8.5" }]}

* Rango `$gt` y `$lt`

```
{ year: { $gt: "1990", $lt: "2000"  }}
```


## Array queires

* `$in`

```
{ genre: { $in: [ "Horror" ] } }
```


## queires en elementos


```
{ cost: { $exists: true } }
```