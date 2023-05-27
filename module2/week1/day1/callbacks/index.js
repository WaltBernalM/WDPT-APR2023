let a = 1;
let b = 2;

function sum(A, B) {
    return A + B
}

sum(a,b)

// window.addEventListener('load', () => {})
// window.onload = () => {

// }

// image.onload = () => {
//    this.draw()
// }


/**
 * (operación A) 
 * Necesito traer datos de un servidor
 * 
 * (operación B)
 * procesar los datos y regresar el resultado para
 * continuar con el flujo de operaciones 
 */


// Operación B: Procesar datos obtenidos del servidor
function processData(data) {
    console.log(`Op B: processing ${data} ...`)
    return `${data} estan listos para usarse en otro lugar`
}
function processDataB(data) {
    // procesa los datos de otra forma
}

// Operación A: Traer datos
function getData(url, callback, errorCallback) {
    if(!url) errorCallback('NoURLError: debes enviar una url valida')
    console.log('Op A: getting data...');
    setTimeout(() => {
        const data = 'some important data';
        const result = callback(data);
        console.log('Result: ', result);
    }, 3000)
}
getData('https://jsonplaceholder.typicode.com/todos', processData, console.error)