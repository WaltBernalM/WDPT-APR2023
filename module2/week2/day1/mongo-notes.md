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