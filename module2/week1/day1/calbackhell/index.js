const instructions = {
    1: 'da vuelta a la derecha 👉',
    2: 'da vuelta a la izquierda 👈',
    3: 'sigue derecho 👆',
    4: 'da vuelta en U'
}

// const getDirections = (step, callback, callbackError) => {
//     if(!instructions[step]) callbackError('InstructionNotFoundError: la instruccion solicitada no existe')
//     console.log(step, instructions[step])
//     callback()
//  }

//  getDirections(1, () => {
//     getDirections(2, () => {
//         getDirections(3, () => {
//             getDirections(4, ()=> {
//                 console.log('ya llegaste a tu destino')
//             },console.error)
//         }, console.error)
//     }, console.error)
//  }, console.error)

// const getDirections = (step) => new Promise((resolve, reject) => {
//     if(!instructions[step]) reject('InstructionNotFoundError: la instruccion solicitada no existe')
//     console.log(step, instructions[step])
//     resolve()
// })

// getDirections(1)
// .then(() => {
//     return getDirections(2)
// })
// .then(() => {
//     return getDirections(3)
// })
// .then(() => {
//     return getDirections(4)
// })
// .then(() => console.log('has llegado a tu destino!'))
// .catch(error => console.error(error))

getDirections(1)
.then(() => getDirections(2))
.then(() => getDirections(3))
.then(() => getDirections(4))
.then(() => console.log('has llegado a tu destino!'))
.catch(error => console.error(error))


// Async - Await

const getDirections = async (step) => new Promise((resolve, reject) => {
    if(!instructions[step]) reject('InstructionNotFoundError: la instruccion solicitada no existe')
    console.log(step, instructions[step])
    resolve()
})


// await solo se puede llamar dentro de funciones "async"
async function goToPlace() {
    try {
        await getDirections(111);
        await getDirections(2);
        await getDirections(3);
        await getDirections(4);
    } catch (error) {
        console.error(error)
    } finally {
        console.log('esto se ejecuta siempre sin importar si la promesa se rechazo')
    }
}

goToPlace()