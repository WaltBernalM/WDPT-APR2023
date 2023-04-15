/**
 * En ES5 estas eran las formas en las que 
 * declarabamos una funcion
 */

/** Function declaration */

// key word      parameters
// 👇              👇
function sum(param1, param2) {
    return param1 + param2;
}

sum(1,2)

/** function expression */

var sumExpression = function(param1, param2) {
    return param1 + param2;
}

sumExpression(1, 2);


/**
 * En ES6 introduce la declaracion de funciones como funciones flecha (arrow functions)
 */

// let sumArrow = (param1, param2) => {
//     return param1 + param2;
// } 

// short version 
let sumArrow = (param1, param2) => param1 + param2; 


console.log(sumArrow(1, 2))


// En js una funcion siempre devuelve un valor y cuando se omite el keyword return
// devuelve su valor por defecto que es undefined


// function greeting() {
//     console.log('Hola')
// }

function greeting() {
    return 'Hola'
}


// 

function compraUnChocolate(cantidad) {
    if(cantidad < 20) {
        return `La cantidad: ${cantidad} no es suficiente para comprar un chocolate`
    } 

    return `Si te alcanza!!!`
}

// * Creen una función que diga cuantos tome de argumento un string e indique cuantas
// letras tiene

// * transformen el codigo que escribimos en clase para contar el numero de veces que 
// la palabra `likes` que aparecia,  en una función, de tal forma que ahora podamos buscar 
// el numero de veces que cualquier palabra que pasemos como argumento para la función

let str = 'John likes to watch movies. Mary likes movies too.';

let times = 0;
let wordToSearch = "likes"
for (let index = 0; index < str.length; index++) {
    if(str.slice(index, index + wordToSearch.length) === wordToSearch) {
        times++;
    }
}
console.log(`el numero de ocurrencias de ${wordToSearch} es: `, times)


// primitive data types in JS
// * number 
// * boolean 
// * string 
// * null 
// * undefined 
// * symbol 

// Arrays []

// podemos declarar un array vacio
// const players = [];

// o con valores
//                       0                1             2
const players = ["Berugo-Carambula", "Cruznick", "XurumelouS"];

console.log(players[0]); // <== Berugo-Carambula
console.log(players[1]); // <== Cruznick
console.log(players[2]); // <== XurumelouS



// push añade el elemento al final del array
players.push("X-neon7")

players.push("riderw")


// "Tovi," "Churrundo", "AldoO88", "JerryLey", "Yuggen", "waltr7", "Xinggod"

players.push("X-neon7", "riderw")

players.unshift("tauromaquia77", "Tovi", "Churrundo", "AldoO88", "JerryLey", "Yuggen", "waltr7", "Xinggod")
console.log(players)


// Como eliminamos elementos de un array: pop, shift y splice

const erasedPlayer = players.shift()

// para eliminar el ultimo usamos pop

const anotherErasedPlayer = players.pop()

// splice

[
    'Tovi',                // 0
    'Churrundo',
    'AldoO88',
    'JerryLey',
    'Yuggen',
    'waltr7',
    'Xinggod', 
    'Berugo-Carambula',   // 7
    'Cruznick',
    'XurumelouS',
    'X-neon7'
  ]
  
  const erasedWithSplice = players.splice(7, 2)


  const replaceWithSplice = players.splice(7, 2, 'player8937', 'player376')


  const xurumelouSIndex = players.indexOf('XurumelouS')
console.log(xurumelouSIndex)
console.log(players[9])


 // break y continue 

 let i = 0;
while (i < 10) {
  i++;
  console.log(`The number is: ${i}.`);
  if (i === 3) {
    break;
  }
}

 for(let i = 0; i < 10; i++) {
    if(i===4){
      break;
    }
    console.log('i: ', i)
  }

 for(let i = 0; i < 10; i++) {
    if(i===4) { 
      continue;
    }
    console.log('i: ', i);
  }


// split join


let str2 = 'John likes to watch movies. Mary likes movies too.';

const array = str2.split(' ')

console.log(array)

console.log(array.length)



let fruits = 'apple orange banana';

let fruitsArary = fruits.split(' ')

console.log(fruitsArary)

console.log(fruitsArary.length)


// join: junta los elemenetos de un array dentro de un string
console.log(fruitsArary.join(', '))


//              [ 'apple', 'orange', 'banana' ]
for(let fruit of fruitsArary) {
    console.log(fruit)
  }
  
  console.log('------------------')
  
  for(let i = 0; i < fruitsArary.length; i++) {
      console.log(fruitsArary[i])
  }


  // forEach

  const fruits = ["apple", "orange", "banana"];


for(let fruit of fruits) {
    console.log(fruit)
}

console.log('------------------')


function fruitIterator( fruta, i, arreglo) {
  console.log(`la fruta ${fruta} tiene el indice ${i}`)
}

//["apple", "orange", "banana"]                  
             fruits.             forEach(fruitIterator);

// Funcion de orden superior, higher order function

const funcionA = (funcionB) => {
  funcionB()
}

// corre desde un indice que no es el inicial usando slice

const fruits2 =  ['apple', 'orange', 'banana'] 


// ['orange', 'banana']
fruits2.slice(1)         .forEach((el) => console.log(el))

