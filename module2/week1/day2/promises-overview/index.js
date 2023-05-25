// async function sum(a, b) {
//     return a + b;
// }

// sum(1, 2).then(value => {
//     console.log(value)
// }).catch()

// // esto no es valido fuera de una funcion async
// // const result = await sum(1,2)

// // deno
// // await sum(1,2)

// // La programacion asyncrona se usa para mejorar la velocidad de ejecusion de los programas

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("foo"), 1000);
//   });
  
//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => reject(1337), 2000);
//   });
  
//   const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve( { name: "Bob" } ), 4000);
//   });
  

//  // si una de las promsas que queremos ejecutar dentro de un Promise.all depende de otra, entonces no podemos usar  Promise.all 
  
//   Promise.all( [p1, p2, p3] )
//     .then((values) => console.log("values", values))
//     .catch(error => console.log(error))
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("foo"), 1000);
  });
  
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1337), 2000);
  });
  
  // supngan que esta promesa se encargaba de traer la informacion de los autos de España de una empresa X
  const p3 = new Promise((resolve, reject) => {
    try {
        setTimeout(() => reject("Something went wrong"), 4000); // <= Reject the promise
    } catch (error) {
      throw new Error('ServerCarError: p3 failed')
    }
  });
  
  Promise.all([p1, p2, p3])
    .then((values) => console.log("values", values))
    .catch((err)=> console.log("catch()", err));
  