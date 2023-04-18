//             fabricante, modelo, año, color
// const auto = ['toyota', 'corola', 2019, 'azul' ]

//     llaves (curly braces)
//           👇   
const auto = {
    // keys         values
    //  👇          👇
    manufacturer: 'toyota',
    model: 'corola',
    year: 2019,
    color: 'blue'
}


// Accedemos a los valores de un objeto usando
console.log(auto.year)     // con notacion de punto (.)
console.log(auto["year"])  // con corchetes

// así sea hacia antes de ES6

// Esto:
// const year = auto.year;
// const color = auto.color;
// const model = auto.model;
// const wheel = undefined;

// es equivalente a esto (se introdujo en ES6):
const { year, model, color, wheel } = auto;
console.log('wheel: ', wheel) 


// respecto a acceder a los valores de un objeto:
console.log(auto.wheel)    // esta notacion se usa cuando yo se que la llave existe
console.log(auto["wheel"]) // esta se usa cuando se que no existe o no estoy seguro


// Function expression
const sum = function(a, b){
    return a + b
}

// function declaration
function sum(a, b) {
    return a +b;
}

// arrow function
const sum = (a, b) => {
    return a + b;
}
 
const eduardo = {
    name: "Eduardo",             // <--Obligatorio
    lastName: "Chavez",
    city: "CDMX",                 // <--Obligatorio
    // drink: function() {
    //     console.log('drinking an efe ...')
    // },
    // drink: () => {
    //         console.log('drinking an efe ...')
    // },
    drink() {
        console.log('drinking an efe ...');
    },
    //eduardo["pet"]
    pet: {                       // <--Obligatorio: ( si nunca tuvieron mascotas asignen null)
        // eduardo["pet"]["name"]
        name: 'katy',
        kind: 'turtle',
        alive: false
    },
    favoriteFoods: ['arrachera', 'adana durum', 'pizza'],  
    car: false
}

// crear un objeto literal
// const eduardo = {
//     name: "Eduardo",             // <--Obligatorio
//     lastName: "Chavez",
//     city: "CDMX",                 // <--Obligatorio
//     drink() {
//         console.log('drinking an efe ...');
//     },
//   //eduardo["pet"]
//     pet: {                       // <--Obligatorio: ( si nunca tuvieron mascotas asignen null)
//         //eduardo["pet"]["name"]
//         name: 'katy',
//         kind: 'turtle',
//         alive: false
//     },
//     favoriteFoods: ['arrachera', 'adana durum', 'pizza'],  
//     car: false
// }

// como accedo a las propiedades de un objeto que estan dentro de otro?

//R: con notacion de punto:
// digamos que quiero leer el nombre de mi mascota
console.log(eduardo.pet.name) // con la notacion de punto
console.log(eduardo["pet"]["name"]) // con la notacion de corchetes




// como accedo a las propiedades de un objeto que estan dentro de otro?

// CRUD: Create, Update, Read, Delete
eduardo.favoriteFoods.push("mole")
// leer (read)
//console.log(eduardo.favoriteFoods)

// crear (create)
eduardo["smoker"] = false;

eduardo["pet"]["legs"] = 4;

// actualizar (Update)
eduardo["pet"]["name"] = "Katty"


eduardo["secretInformation"] = {
  creditNumber: '67863767',
  pin: '1234'
}

//console.log('Yo antes de usar delete de secretInformation',eduardo)

// Borrar (Delete)
delete eduardo.secretInformation;

//console.log('Yo despues de usar delete de secretInformation',eduardo)


// el operador "in" (shallow)
const isNamePresent = 'name' in eduardo;
const isSecretInformationPresent = 'secretInformation' in eduardo;
const isLegsPresent = 'legs' in eduardo;
console.log(isLegsPresent)


// ¿Como iteramos sobre un objeto?

// para iterar sobre las llaves usamos Object.keys o "for in"

Object.keys(eduardo) // esto me devuelve un array

console.log(Object.keys(eduardo))


const car = {
    manufacturer: 'toyota',
    model: 'corola',
    year: 2019,
    color: 'blue'
}
  // iteracion 4: key = color   { manufacturer, model, year, color }
for(const key in car) {
  console.log(key)
}


//  Object.values

console.log(Object.values(car)) // Object.values devuelve los valores del objeto dentro de un array



// // info para la clase del miercoles
// // emiliano

// const emialiano ={
//   name: "emiliano",
//   apellido: "moreno",
//   city: "Guadalajara",
//   drink: function (){
//     console.log('iced tea')
//   },
//   pets:{
//     name: "mocha",
//     kind: "gato",
//     alive: true,
//   },
//   favoriteFoods: ['boneless']
//   car: "controlremoto",
// }


// //Juan Pablo
// const juanPablo={
//   name:"Juan Pablo",
//   apellido:"Maurer",
//   ciudad:"CDMX",
//   drink:  function (){
//         console.log("chocomil...")},
//   pet:{
//     name:"Borrego",
//   	kind: "dog",
//   	alive:true},
//   favoriteFoods: "Pad Thai, Pizza",
//   car:"false"
// }
// //Dal

// const dalia = {
//   name: "Dalia",
//   apellido: "Guevara", 
//   city: "CDMX"
//   drink: function (){
//         console.log('drinking a beer...')
//     }, 
//   pet: {
//     name: 'Bronx',
//     kind: 'gato',
//     alive: true,
//   },
//   favoriteFoods: ['Pizza','Arroz','Elotes']
//   car: true
  
// }



// //Cristian

// const persona={
//     name:'Cristian',
//     lasname:'Fer',
//     city:'HGO',
//     drink:
//     function(){
//             console.log('Soda')
//     },
//     pet:{
//         name:'Minina',
//         kind:'Cat',
//         alive: true
//     },
//     favoriteFoods:['Pasta','pizza'],
//     car:false
// }

// //victor 
// const manuel = {
//     name: 'Victor',
//     lastName: 'Tovar',
//     city: 'CDMX',

// pet: {
//     name: 'saul',
//     kind: 'dog',
//     alive: true,
// },
// favoriteFood: ['Tacos', 'burgers'],
// car: false
// }

// /* Walt */
// const walter = {
//   firstName: "Walter",
//   lastName: "Bernal",
//   city: "GDL",
//   drink: function() {
//     console.log("drinks a Stout beer")
//   },
//   pet: {
//     name: 'Maxi',
//     kind: 'dog',
//     alive: true,
//   },
//   favoriteFoods: [
//     "Lasagna",
//     "Vacio",
//   ]
// }
    
//     const Gerardo = {
//   name: "Gerardo",
//   lastName: "Lopez",
//   city: "Tequisquiapan",
//   funcition(){
//     console.log("Coca sin azucar")
//   },
//   pet: {
//     name: "Bacon",
//     kind: "Perro",
//     alive: true,
//   },
// favoritefood [pizza, tacos, hamburguesas],
// car: true,
// }

 

// const karla = {
//     firstname: "Karla",
//     lastname: "Camara",
//     city: "CDMX",
//     drink:
//     function(){
//         console.log("agua")
//     },
//     pet:{
//         name: "dante",
//         kind:"dog",
//         alive: true
//     };
  
// const aldo = {
//     name: 'Aldo',
//     lastname: 'Gonzalez',
//     city: 'Pachuca',
//     pet:{
//         name: 'kyra',
//         kind: 'dog',
//         alive: true
//     }
// };
    
// const Fauatino = {
//     name: 2Faustino" ,
//     apellido: "Casasola" ,
//     city: 'Edo de Mex' ,
//     drink: function() {
//         console.log(beer)
//     }
// },

// pet:{
//     name: 'Kira´ ,
//     kind: 'dog' ,
//     alive: 'true' ,
//     favoriteFoods: "Picaña, mariscos" ,

// }


