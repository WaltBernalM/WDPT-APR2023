// Iteracion 1


// String

let name = "Ana";
let lastName = 'Smith';

console.log(`Hello there ${name}`)


console.log(`la suma de 2 + 2 = ${2 + 2}`)


let fruits = `
    banana
    apple
    orange
`

const quote  = "'Si crees que lo puedes lograr o no en ambos casos tendras razon'. Henry Ford";
const quote2 = '"Si crees que lo puedes lograr o no en ambos casos tendras razon". Henry Ford';

const quote3  = "\"Si crees que lo puedes lograr o no en ambos casos tendras razon\". Henry Ford";

const word = 'I\'m';

const fruits2 = "banana \n apple \n orange \n";


// basic methods with string

let stringVacio = "";
stringVacio += "Tengo contenido" //stringVacio = stringVacio + "Tengo contenido" 

stringVacio += " mas contenido adicional"

console.log(stringVacio);


// operador []
//   0123456
let word2 = "esta es una palabra"
word2[0] // e
word2[4] // ""
word2[6] // s

word2[4] = "-"
console.log(word2)
// como capitalizamos la primera letra de un nombre?
let name2 = "eduardo"
let name2Capitalized = name[0].toUpperCase() + name2.slice(1, name2.length)
console.log(name[0].toUpperCase())


// chartAt

let word2 = "esta es una palabra"

console.log(word2.charAt(0))// e
console.log(word2.charAt(4))// ""
console.log(word2.charAt(6))// s

// como buscamos substrings dentro de un string
const message = "Don't be sad, be happy!";

// indexOf encuentra el primer indice del substring que buscamos
console.log(message.indexOf("Don't"))
console.log(message.indexOf("be", 14 + 1))

// repeat

console.log("la".repeat(10))
console.log("$".repeat(1000))
console.log("🤯".repeat(200));


// substring, substr, slice

const message2 = "Don't be sad, be happy!";

console.log(message2.substring(0, 3)); // Don
console.log(message2.substr(0, 3)); //  Don (recuerden este ya esta deprecado)
console.log(message2.slice(0, 3)); // Don

console.log(message2.substring(-1)); // Don
console.log(message2.slice(-1)); // Don

console.log(message2.substring(-1)); // Don
console.log(message2.slice(-1)); // Don


// localeCompare

// 'str1'.localeCompare('str2');
//👍 Regresa -1 si str1 es menor (precede) que str2.
//👍 Regresa 1 si str1 es mayor que str2 .
//👍 Regresa 0 si son iguales.
const str1 = 'apple';
const str2 = 'banana'; 
const str3 = 'bananas';

console.log(str2.localeCompare(str3) ); 




// undefined es un tipo de dato primitivo asignado automaticamente a las variables que declaramos
let name;
console.log(name); // <== undefined

// En javascript null se usa para indicar que el valor de una variables es desconocido
let lastName = null;
console.log(lastName); // <== null


// booleans


// 0r
true  || true       // => true
true  || false      // => true
false || true       // => true
false || false      // => false
false || (5 > 2)    // => true


// and

true  && true       // => true
true  && false      // => false
false && true       // => false
false && false      // => false
false && (5 > 2)    //  => false


// Not

!true // => false
!false // => true
!(4 < 3) // =>true 


// Operaciones de control de flujo

const age = parseInt(prompt("Bienvenido al mejor sitio de apuestas. Ingresa tu edad"));

if (age <= 16) {
  console.log ("Lo sentimos no puedes apostar a esa edad, pero dile a tus padres que apuesten con nosotros");
} else if (age >= 65) {
  console.log ("Tenemos paquetes especiales para la 3ra edad");
} else {
  console.log ("Adelante al mejor sitio de apuestas");
}

// switch case
const number = parseInt(prompt('Dame un numero del 1 al 9'))


switch (number) {
  case 1:
    console.log('el reformador')
    break
  case 2:
    console.log('el ayudador')
    break
  case 3:
    console.log('el triunfador')
    break
  case 4:
    console.log('el individualista')
    break
  case 5:
    console.log('el investigador')
    break
  case 6:
    console.log('el leal')
    break
  case 7:
    console.log('el entusiasta')
    break
  case 8:
    console.log('el desafiador')
    break
  case 9:
    console.log('el pacificador')
    break
  default: 
    console.log('Lo siento, las estrellas te brillan al reves 😬')
    break
}

// while and for - Bag of Words
//           01234 
const str = "John likes to watch movies. Mary likes movies too.";

let words = 1; 

for (let index = 0; index < str.length; index++) {
    if(str[index]===" ") {
        words = words + 1;
    }
}
console.log('el numero de palabras es: ', words)

// ahora queremos saber cuantas veces aparece la palabra "likes" en el string

let times = 0;
let wordToSearch = "likes"
for (let index = 0; index < str.length; index++) {
    if(str.slice(index, index + wordToSearch.length) === wordToSearch) {
        times++;
    }
}
console.log(`el numero de ocurrencias de ${wordToSearch} es: `, times)



// solucion 2

let index = 0;
let timesOcurence = 0;
let counter = 0;

while(index < str.length) {
  const newIndex = str.indexOf("likes", index + 1)
  if(newIndex > index) {
    timesOcurence++;
    index = newIndex;
  }
  if(counter >= str.length) {
    break;
  }
  counter++
}
console.log('index: ', index)
console.log('timesOcurence: ', timesOcurence)