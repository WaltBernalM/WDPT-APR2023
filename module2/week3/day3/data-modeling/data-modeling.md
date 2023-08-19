## Model One-to-One Relationships with Embedded Documents

ej de relaciones uno a uno:

 Una persona tiene un unico pasaporte
 Una identificación personal solo puede identificar a una persona

```js
// passaport
{
   _id: ObjectId("p1"),
   name: "pasaporte mexicano",
   pass_number: '123',
   expiration_date: '2030'
}

// user
{
   _id: ObjectId("u1"),
   name: 'Roberto',
   age: 30,
   passport_id: ObjectId("p1")
}
```

esta relacion uno-a-uno usando `embedded documents`:

```js
{
   _id: ObjectId("u1"),
   name: 'Roberto',
   age: 30,
   passport: {
      name: "pasaporte mexicano",
      pass_number: '123',
      expiration_date: '2030'
   }
}
```


**Nota** dependiendo del negocio la relación podría dejar de ser uno -a-uno

## Model One-to-Many Relationships with Embedded Documents

Ahora desde el punto de vista de un aeropuerto, una persona puede tener muchos pasaportes, pero
cada pasaporte solo puede pertenecerle a una persona

A esto se le llama relaciones **uno-a-muchos** o **muchos-a-uno**

usando referencias modelariamos la situación así

```js

// users

{
   _id: ObjectId("u1"),
   name: 'Roberto',
   age: 30
}

// passaport
{
   _id: ObjectId("p1"),
   name: "pasaporte mexicano",
   pass_number: '123',
   expiration_date: '2030',
   user_id: ObjectId("u1")   //< - referencia al usuario dueño de este pasaporte
}
{
   _id: ObjectId("p2"),
   name: "pasaporte español",
   pass_number: '321',
   expiration_date: '2035',
   user_id: ObjectId("u1")  //< - referencia al usuario dueño de este pasaporte
}
```

Posibles problemas:

* Si el aeropuerto necesita estar trayendo la info del usuario cada vez que revisa la info de los pasaportes,
  entonces se hacen muchas peticiones para resolver las referencias


como resolverian el problema usando `embeddings`?

```js
{
   _id: ObjectId("u1"),
   name: 'Roberto',
   age: 30,
   passports: [
      {
         _id: ObjectId("p1"),
         name: "pasaporte mexicano",
         pass_number: '123',
         expiration_date: '2030',
      },
      {
         _id: ObjectId("p2"),
         name: "pasaporte español",
         pass_number: '321',
         expiration_date: '2035',
      }
   ]
}

```

## Many-to-Many Relationships with Document References

Many-to-many, significa en este ejemplo:

* Un un libro puede tener multiples editorialers (publishers) y una editorial puede tener multiples libros

```js
// book 1:
{
   title: "MongoDB: The Definitive Guide",
   author: [ "Kristina Chodorow", "Mike Dirolf" ],
   publisher: {
              name: "O'Reilly Media",
              founded: 1980,
            }
}

// book 2:
{
   title: "50 Tips and Tricks for MongoDB Developer",
   author: "Kristina Chodorow",
   publisher: {
              name: "O'Reilly Media",
              founded: 1980,
            }
}

```
Problemas con usar embedings:
* Datos repetidos
* Dificil agregar información del campo que esta embebido (cuantos libros a publicado una editorial en particular)



## Model Many-to-Many Relationships with intermediate References Collection

consideremos aca el caso en donde un libre tiene hasta 4 editoriales diferentes, tendremos hasta 5 ids diferentes del mismo libro solo porque la editorial cambia
```js

// publishers
{
   _id: ObjectId("p1"),
   name: "O'Reilly Media",
}

{
   _id: ObjectId("p2"),
   name: "SitePoint Media",
}


// Books
{
    _id: ObjectId("b1"),  
    title: "MongoDB: The Definitive Guide",
    author: [ "Kristina Chodorow", "Mike Dirolf" ],
    publisher_id: ObjectId("p1")

}

{
    _id: ObjectId("b2"), //<-- el id es diferente, a pesar de ser el mismo libro, porque el publisher es diferente
    title: "MongoDB: The Definitive Guide",
    author: [ "Kristina Chodorow", "Mike Dirolf" ],
    publisher_id: ObjectId("p2")

}

{
   _id: ObjectId("b3"),
   title: "50 Tips and Tricks for MongoDB Developer",
   author: "Kristina Chodorow",
   publisher_id: ObjectId("p1")
}
```
Problemas: 
* dificil saber cuantos libros unicos realmente hay porque los ids ya no nos dan esa info (hay que hacer queries y agregaciones para saberlo)




Colleccion para hacer referencias:

```js
{
   _id: ObjectId("r1"),
   book_id: ObjectId("b1"),           // MongoDB: The Definitive Guide
   publisher_id: ObjectId("p1")       // O'Reilly Media
}


{
   _id: ObjectId("r2"),
   book_id: ObjectId("b1"),          // MongoDB: The Definitive Guide
   publisher_id: ObjectId("p2")      // SitePoint Media
}


{
   _id: ObjectId("r3"),
   book_id: ObjectId("b2"),           // 50 Tips and Tricks for MongoDB Developer
   publisher_id: ObjectId("p1")       // O'Reilly Media
}
```

de esta forma, es facil saber cuantos libros unicos hay (ahora si cada id representa un unico libro)