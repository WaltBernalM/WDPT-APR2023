function sum(a, b) {
    return a + b;
}

console.log(sum(1, 2))


// arguments solo existe para funciones declaradas como
// function declaration and function expression, las arrow no tienen este objeto
function sum() {
    console.log(arguments)
    // Object.values me da los valores de un objeto 

    let suma = 0;
    //         [10, 4, 2, 1]
    Object.values(arguments).forEach((argument) => {
      suma += argument // suma = suma  + argument
    })
  return suma
}

console.log(sum(10, 4, 2, 1, 3))

// antes   { '0': 1, '1': 2, '2': 4, '3': 10 }
// despues { '0': 10, '1': 4, '2': 2, '3': 1 }

// la forma preferida de hacerlo es con params porque es mas explicito
function sum(...params) {
    // Object.values me da los valores de un objeto 

    let suma = 0;
    //params = [10, 4, 2, 1, 3, 10]
    params.forEach((argument) => {
      suma += argument // suma = suma  + argument
    })
  return suma
}

console.log(sum(10, 4, 2, 1, 3, 10))

console.log(Math.max(10, 4, 2, 1, 3, 11))

// antes   { '0': 1, '1': 2, '2': 4, '3': 10 }
// despues { '0': 10, '1': 4, '2': 2, '3': 1 }


// terminen la clase que construye objetcos a los cules les
// podemos preguntar por su longitud
class ObjectWithLength {
    constructor(object) {
        this.objetc = object
    }
    length() {
        
    }
}

//

const greeting = [  'hola', 'hello', 'ahoj' ];


// con forEach
// const effusiveGreetings = [];
// greeting.forEach(el => {
//   effusiveGreetings.push(el + '!')
// });

// con map
const effusiveGreetings = greeting.map(el => el + '!');

console.log(effusiveGreetings)

// effusiveGreetings = [  'hola!', 'hello!', 'ahoj!' ]


// con map te devuelve el mismo numero de elementos que recibe
const effusiveGreetings = greeting.map(el => {
    if(el === 'hola') return el + ' 🔥';
    return el;
  });
///

const carsToSellMexico = [             // precio en pesos MX
  { manufaturer: 'toyota', model: 'prius', price: 400000 }, 
  { manufaturer: 'mercedes', model: 'a3', price: 800000  } 
]

// crear una copia


// trabajar con lo copia
const newPricesForBrasil = carsToSellMexico.map(car => {
  car.price = car.price / 4; // el real esta como a 4 pesos MX
  return car;
})

// la carrera de este jr ☠️
console.log('lista original de precios Mx', carsToSellMexico)
console.log('lista para publicar en Br', newPricesForBrasil)



const students = [
    {
      name: 'Tony Parker',
      firstProject: 80,    //-  40%
      secondProject: 75,   //-
      finalExam: 90       // 60%
    },
    {
      name: 'Marc Barchini',
      firstProject: 84,
      secondProject: 65,
      finalExam: 65
    },
    {
      name: 'Claudia Lopez',
      firstProject: 45,
      secondProject: 95,
      finalExam: 99
    },
    {
      name: 'Alvaro Briattore',
      firstProject: 82,
      secondProject: 92,
      finalExam: 70
    },
    {
      name: 'Isabel Ortega',
      firstProject: 90,
      secondProject: 32,
      finalExam: 85
    },
    {
      name: 'Francisco Martinez',
      firstProject: 90,
      secondProject: 55,
      finalExam: 78
    },
    {
      name: 'Jorge Carrillo',
      firstProject: 83,
      secondProject: 77,
      finalExam: 90
    },
    {
      name: 'Miguel López',
      firstProject: 80,
      secondProject: 75,
      finalExam: 75
    },
    {
      name: 'Carolina Perez',
      firstProject: 85,
      secondProject: 72,
      finalExam: 67
    },
    {
      name: 'Ruben Pardo',
      firstProject: 89,
      secondProject: 72,
      finalExam: 65
    }
  ];
  
  // Estrategia:
  // 1. itero sobre cada elemento del array
  // 2. calculo el promedio de los proyectos 1 y 2 y calculo el 40%
  // 3. calcular el 60% del finalExam
  
  // la calificacion final (finalGrade) es:
  // el 40% del promedio de los proyectos 1 y 2, mas
  // el 60% del examen final (finalExam)
  const results = students.map(student => {
  
    //                             este es el promedio de los proyectos 1 y 2
    const projectsAverage =  ((student.firstProject + student.secondProject) / 2) * .4
  
    return { name: student.name, finalGrade: projectsAverage + student.finalExam * 0.6 }
  })
  
  console.log(results)




const numbers = [ 1, 4, 8, 19];

// acc = 0
// acc = 1;
// acc = 5;
// acc = 13;
// acc = 32
const result  = numbers.reduce((acumulador, el) => {
  return acumulador += el; // acumulador = acumulador + el;
}, 0)

console.log('result: ', result)


///

const characters = ['a', 'l', 'l', 'l', 'l', 'l']

const reducedChar = characters.reduce((acc, char, idx) => {
  console.log('idx: ', idx, 'acc: ', acc)
  return acc + "." + char
})

console.log(reducedChar)


// filter

const numbers = [ 1, 2, 3, 4, 5, 6 ]

// obtener todos los numeros que son pares
const result = numbers.filter((number, idx, originalArray) => {
  return number % 2 === 0;
})

console.log(result)