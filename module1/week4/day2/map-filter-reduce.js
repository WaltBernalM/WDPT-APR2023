const mainMenu = [
    {
      itemName: 'Hamburguesa',
      type: ['res', 'pollo', 'veggie'],
      sizes: [
        { size: 'Sencilla', price: 10 },
        { size: 'Doble', price: 15 }
      ],
      extras: {
        price: 1,
        options: ['Queso', 'Huevo']
      }
    },
    {
      itemName: 'Agua',
      type: null,
      sizes: [
        { size: '500ml', price: 5 },
        { size: '750ml', price: 8 }
      ],
      extras: null
    },
    {
      itemName: 'Gaseosa',
      type: null,
      sizes: [
        { size: '500ml', price: 8 },
        { size: '750ml', price: 10 }
      ],
      extras: null
    },
    {
      itemName: 'Papas Fritas',
      type: null,
      sizes: [
        { size: 'estandard', price: 1 }    
      ]
    },
    {
      itemName: 'Onion Rings',
      type: null,
      sizes: [
        { size: 'estandard', price: 1 }    
      ]
    }
  ];


// Reto 1. Usando mainMenu 
// crear una función llamada takeOrder 
// que tome la orden de una mesa y regrese un array con los items
// seleccionados y la cantidad


// Ej.
// 2 🍔 🐓 + extra 🧀 Sencilla
// 1 🍔 🐄 + extra 🥚 Sencilla
// 3 🥤 750 ml
// expected output

// Reto 1: En un array de arrays traducir escribir las 3 ordenes en un array 

const orden = [
  [2, 'Hamburguesa', 'pollo', 'Sencilla', 'Queso'],
  [1, 'Hamburguesa',   'res', 'Sencilla', 'Huevo'],
  [3, 'Gaseosa',        null,    '750ml',   null],
]

// Reto 2: Escribir una función que entregue un array de objetos  
// const takeOrder = (quantity, itemName, type, size, extra) => {}
const takeOrder = (quantity, itemName, type, size, extra) => {
  return mainMenu.filter(itemMenu => itemMenu.itemName === itemName)
  .map(item => {
    return {
        quantity: quantity,
        type: type && item.type.filter(t => t === type),
        sizes: item.sizes.filter(s => s.size === size),
        extras: extra && {
          price: item.extras.price,
          options: item.extras.options.filter(e => e === extra )
        }
      }
  })
}

console.log(JSON.stringify(takeOrder(2, 'Hamburguesa', 'pollo', 'Sencilla', 'Queso')))

// son equivalentes cuando el operador ternario evalua a null en una de sus evaluaciones
//const result = type ? item.type.filter(t => t === type) : null
//const result = type && item.type.filter(t => t === type) 

// [2, 'Hamburguesa', 'pollo', 'Sencilla', 'Queso']
const result = orden.map((element) => {
    return takeOrder(element[0], element[1], element[2], element[3], element[4])
  })
  
  
  const [ a, b ] = [ 0, 1 ]
  
  const [quantity, itemName, type, size, extra] = [2, 'Hamburguesa', 'pollo', 'Sencilla', 'Queso'];
  
  // con sintaxis pro
  const result = orden.map(([quantity, itemName, type, size, extra]) => {
    return takeOrder(quantity, itemName, type, size, extra)
  })
  
  console.log('result: ', JSON.stringify(result))
  
  // expected output 
  const tableOrder = [
      {
          quantity: 2,
          itemName: 'Hamburguesa',
          type: [ 'pollo' ],
          sizes: [
            { size: 'Sencilla', price: 10 },
          ],
          extras: {
            price: 1,
            options: ['Queso']
          }
      },
      {
          quantity: 1,
          itemName: 'Hamburguesa',
          type: ['res'],
          sizes: [
            { size: 'Sencilla', price: 10 },
          ],
          extras: {
            price: 1,
            options: ['Huevo']
          }
      },
      {
          quantity: 3,
          itemName: 'Gaseosa',
          type: null,
          sizes: [
            { size: '750ml', price: 10 }
          ],
          extras: null
      }
  ]
  
  
// reto 4 usar el array result para calcular el precio de toda la orden  