// JS corre en un unico hilo de ejecusion
// pero fue diseñado para tener un comportamiento asyncronico
// el cual resuelve 2 problemas comunes cuando construimos applicaciones
// que se ejecutan en internet
// 1. Debe prevenir la existencia de codigo bloqueante
//    ("event loop": que es como se ejecuta el codigo en el navegador)
// 2. Debe manejar eventos asincronicos 
//    (evento que no sabemos cuando se va a resolver o terminar en el tiempo)
//    callbacks


// los callbacks en javascript se usan bajo estos 3 importantes escenarios

// 1. Manejar eventos asincronicos
// 2. Para definir funciones de orden superior (que se usan en programación funcional)
// 3. Para manejar eventos en el DOM 

/**
 * 
 */

function desayunar() {
    console.log(`desayunando unos 🌮🌮🌮...`);
}

function lavarseLosDientes(callback) {
    if(callback) callback();
    console.log(`🪥 👄`);
}

// ¿Como se utilizan los callbacks?
lavarseLosDientes();


// Reto 1
// 1. crear una clase llamada Arreglo
class Arreglo {
    constructor(array){
        this.array = array;
    }
    forEach(callback) {
        for(let i=0; i < this.array.length; i++) {
            callback(this.array[i], i, this.array);
        }
    }
}
// 2. Se inicializa usando un array, ej:
const fruits = ["🍌", "🍎", "🟠", "🍉"];
const customArray = new Arreglo(fruits);

// // 3. crea un metodo llamado forEach en la clase 
// // Arreglo que haga exactamente lo mismo que el metdo forEach
// //  que tienen todos los arrays de JS

// // ejemplo de lo que se espera
let cocktel = '';
// customArray.forEach((fruit, i, arrayOriginal) => {
//     cocktel += fruit;
//     console.log('cocktel: ', cocktel)
//   })

fruits.forEach((fruit, i, arrayOriginal) => {
    cocktel += fruit;
    console.log('cocktel: ', cocktel)
})



//  setTimeout
// setInterval


// setTimeout
//                                                esta en ms
//           👇           👇          👇              👇
// const timeoutId = setTimeout(callbackFunction , delay);

const kaboon = () => {
    console.log("💥")
}
console.log('💣')
const timeoutId1 = setTimeout(kaboon, 10000);
const timeoutId2 = setTimeout(kaboon, 1000);
const timeoutId3 = setTimeout(kaboon, 5000);

console.log('💦')
clearTimeout(timeoutId1);
clearTimeout(timeoutId3);

// Ejercicio 2: agreguen algo dentro de timer que detenga el
// conteo despues de 5s
// let counter = 1;

// const timer = function() {
//     console.log(counter); // 5
//     let timeoutId = setTimeout(timer, 1000); // timeoutId tiene un nuevo valor y vuelvo a llamar a timer
//     counter +=1; // counter se incrementa a 6
//     if(counter > 5) {  // no se entra en el if
//         clearTimeout(timeoutId);
//     }
// }

// // este timeoutId solo tiene control del primer timeout
// setTimeout(timer, 1000);


// setInterval
//          👇              👇          👇             👇
// const intervalId = setInterval(callbackFunction, delay);

let j = 0;
const intervalId = setInterval(() => {
    j ++;
    console.log('⏱: ', j)

    if(j >= 10) {
        clearInterval(intervalId)
    }
}, 1000);


// Ejercio 3
// existe una funcion llamada clearInterval(intervalId)
// que detiene la ejecución de un setInterval con id = intervalId

// REto: detener el contador despues de 10 s