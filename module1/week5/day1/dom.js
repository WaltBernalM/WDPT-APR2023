// 1. Una documentación de como usar una pieza de softwere
// 2. Un contrato


// [1,6,7].map(el=> el + 10)

// POST /v1/add10
// body: [...]



console.log('js connected');

// como obtener un node del DOM por Id
const h1 = document.getElementById('title');
console.log(h1);

// como puedo modificar el contenido de uno de estos elementos que me traje


h1.innerHTML = 'El Dom';
h1.style.color = 'red';

const h2 = document.getElementById('subtitle')

h2.innerHTML = 'Titulo secundario';
h2.style.color ='green';

const paragraphs = document.getElementsByClassName('item');
console.log(paragraphs)

// Un HTMLCollection no es iterable con metodos de array
for(let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = 'magenta';
}
// paragraphs.forEach(p => p.style.color = 'magenta')
// Todos los getElement(s)By.... son metodos de la API antiguos
// que fueron creados antes de los metodos de Array

// En javascript hay un objeto llamado Array y solo 
// instancias de Array pueden usar los metodos de array

console.log('paragraphs is array?', Array.isArray(paragraphs))

// para transformar algo que es como un array en un array de verdad hacemos:
// const paragraphsArray = Array.from(paragraphs)
const paragraphsArray = [...paragraphs];


console.log('paragraphsArray is array?', Array.isArray(paragraphsArray))


// La nueva forma de traer nodos es usando querySlector y querySelectorAll
const h1WithQS = document.querySelector('#title');
console.log('El nodo con query selector', h1WithQS);
h1WithQS.innerHTML = 'DOM';

// const article = document.getElementsByTagName('article');
const article = document.querySelector('article');
console.log(article);


const paragraphsWithQSA = document.querySelectorAll('.item');

paragraphsWithQSA.forEach(p => p.style.border = '1px black solid');