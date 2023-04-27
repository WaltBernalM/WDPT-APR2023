const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];
const numbers2D = [ [10, 2], [ 2,4 ]]

// metodos para copiar arrays (shallow copies)
//const numbersCopy = [...numbers2D];
const numbers2DCopy = numbers2D.slice();

// para hacer copias "profundas"
//                  siempre usen esto para copiar objetos y arrays
const numbers2DDeepCopy = JSON.parse(JSON.stringify(numbers2D))

// para sort por default todo es un string
//             la funcion que le indica a sort como
//             debe ordenar a los elementos, debe devolver 
//             un numero positivo, negativo o cero
///                     👇
deepCopy[0].sort((a, b) => {
  if(a > b) {
    return 1
  } else if (a < b) {
    return -1 
  } else {
    return 0
  }
});

// Forma corta del metodo anterior
//numbers.sort((a, b) => {
 // return a - b
//});

console.log('original: ',numbers2D)
console.log('copia', numbers2DDeepCopy)


// Las copias profundas tambien funcionan con objetos

const person = {
  name: 'Roberto',
  address: {
    street: 'some street',
    luckyNumbers: [9 , 1, 98, 7]
  }
} 


const personDeepCopy = JSON.parse(JSON.stringify(person))
//                                                      inverse invierte el orden de un array
const sortedLuckyNumbers = personDeepCopy.address.luckyNumbers.sort((a, b)=> a -b).reverse()

console.log('person: ', person)
console.log('personDeepCopy', personDeepCopy)