// const username = 'edx';

// imaginen que persona es req.body
const persona = {
  username: 'Eduardo',
  password: '123456',
  address: {
    street: 'calle 0',
    number: 987,
    city: 'CDMX'
  },
  hobbies: [ 'bet', 'sleep', 'code' ]
}


const { 
  // change name of key
  username: name, 
  password: pass, 
  address: direccion,
  hobbies,
  // setear defaults
  country = 'Mexico' 
} = persona;
// const country = 'Mexico'
console.log(name, pass, country )

const { number, street,  city } = direccion;

console.log('direccion: ', direccion)
console.log('street: ', street)
console.log('number: ', number)
console.log('city: ', city)


// array
console.log('hobbies: ', hobbies)

const [ b, s, c ] = hobbies;

console.log('bet: ', b)
console.log('sleep: ', s)
console.log('code: ', c)


// objetos y array parciales
// usamos el spread operator ... para copiar en un nuevo objeto
// informacion parcial del original
// la destructuracion toma los valores delas llaves y las guarda en variables
// que tienen el mismo nombre 
const { username, password,  ...personalInfo } = persona;

// este es un objeto nuevo que no tiene relacion con el original
const loginInfo = { username, password }

console.log('loginInfo: ', loginInfo);
console.log('personalInfo: ', personalInfo);

//
// loginInfo.username = 'Elena';
console.info('persona username', persona.username)
console.info('loginInfo username', loginInfo.username)

  // El spread operator solo copia las llaves mas superficiales
  console.info('persona favoriteMusic', persona.favoriteMusic)
  console.info('personalInfo favoriteMusic', personalInfo.favoriteMusic)
  // las que estan mas adentro siguen referenciando al objeto original
  console.info('persona street', persona.address.street)
  console.info('personalInfo street', personalInfo.address.street)

// forma segura de destructurar y copiar un objeto

// const persona = {
//     username: 'Eduardo',
//     password: '123456',
//     address: {
//       street: 'calle 0',
//       number: 987,
//       city: 'CDMX'
//     },
//     hobbies: [ 'bet', 'sleep', 'code' ],
//     favoriteMusic: 'Rock'
//   }
  
  const { address, hobbies, favoriteMusic } = persona;
  const { street, number, city } = address;
  const [a, b, c] = hobbies;
  const personalInfo = {
    address: { street, number, city },
    hobbies: [a, b ,c],
    favoriteMusic
  }
  
  personalInfo.address.street = 'calle 1';
  personalInfo.favoriteMusic = 'reggeton';
  

  console.info('persona favoriteMusic', persona.favoriteMusic)
  console.info('personalInfo favoriteMusic', personalInfo.favoriteMusic)

  console.info('persona street', persona.address.street)
  console.info('personalInfo street', personalInfo.address.street)
  