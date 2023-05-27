// El scope define la region del codigo donde una variable existe
// En la mayoria de los casos el scope puede ser identificado por {}
// que vemos en el codigo (excepto para el scope global)

// En estos dos ejemplos let, const y var se comportan igual
// el scope de la función solo tiene alcance dentro de la función

// Tampoco importa si declaran las funciones usando:
// function declaration, expression o arrow functions

const PI = 3.1416;

const circleArea = (radius) => {
    return PI*radius**2;
}

const radius = 1;
console.log(`The area of a circle of radius r:${radius} is: `,circleArea(radius));

// Las variables que definimos dentro de una función serán accesibles afiera?

const tienenDudas = "😎";

const personalFeelings = () => {
    const verdaderosSentimientos = "😬";
    return verdaderosSentimientos;
}


personalFeelings() 
// console.log('tienen dudas', tienenDudas);
// console.log('verdaderos sentimientos', verdaderosSentimientos); 



/**
 * (
 * las arrow functions difieren de las funciones declaradas con el keyword "function"
 * en el scope the "this" pero los ejemplos de arriba solo hacen referencia a declaracion
 * de variables, no estamos usando "this"
 * )
 */

/**
 * En javascript hay tres tipos diferentes de scope (alcances) para las variables
 * 1- Global scope 
 * 2- Function scope
 * 3- Block scope cuando ven {} pero no pertenecen a una funcion
 */


{
    var greetings = 'hola';
}

console.log(greetings);




for (var i = 1; i <= 3; i++) {

    console.log(`Iteration number: ${i}`);
}
  
console.log(`After the loop: ${i}`);

// let y const respetan el el block scope
// if(true) {
//     const fruit = '🍉';
// }

// var no respeta el el block scope
// if(true) {
//     var fruit = '🍉';
// }

// console.log(`fruit: ${fruit}`);


// la estructura de datos "Stack"
// 1. sirve para almacenar elementos
// 2. los elementos que añadimos siempre se agregan al final del stack
// 3. Los elementos que sacamos del stack siempre son los ultimos


const stack = ['a', 'b', 'c'];
// si solo usamos push and pop un array de js se comoporta como un stack
stack.push('d');
console.log(stack)

stack.pop();
console.log(stack)



// re-declaracion de variables
// con let y const js nos previene de hacerlo dentro del
// mismo scope
// con var no es así, js nos deja sin advertirnos
var a = 1;
console.log('a: ', a );
var a = 3;
console.log('a: ', a );
// let a = 1;
// console.log('a: ', a );
// let a = 3;
// console.log('a: ', a );



// Shadowing

// Cuando declaramos una variable con var
// en un block scope, es como si no existiera

// con const y let el alcance de las variables es el del
// scope
let nombre = 'Elena';

if(true) {
    let nombre = 'Arnel';
    console.log('name adentro: ', nombre);
}

console.log('name afuera: ', nombre);


// HAy que tener cuidado de no cambiar
// el valor de una variable en un
// scope differente 
let approve = true;
let y = 2;
 
function inner() {
  approve = false; // reassigned
  let y = 3; // declared in an inner scope
}
 
inner();
console.log('approve: ', approve); // => true
console.log('y: ' , y); // => 2




//
const obj = {};
console.log('antes de la cracion de name: ', obj)
obj.name = 'Ironhacker';
console.log('despues de la cracion de name: ', obj)


// obj = {
//     name: "Ironhacker"
// }; 



// hoisting

// cuando declaramos una variable con var
// podemos acceder a ella incluso antes de
// su declaracion, porque js busca en todo el
// codigo todas las viabels declaradas con var
// y les asigna el valor de undefined
// eso se le conoce como hoisting
console.log(message); // => undefined
var message = 'Hello from the global scope!';


// cuando declarmos variables con let y const
// ya no podemos acceder a esas variables antes
// de que sean definidas, aunque existan mas abajo
// en el codigo  
// console.log(message2); // => Uncaught ReferenceError: Cannot access 'message2' before initialization
// let message2 = 'Hello from the global scope!';

