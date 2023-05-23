/**
 * code wars
 */

function validateHello(greetings) {
    if(!greetings) throw new Error('no funciono si me envias un string vacio');
    // 1. Tomamos el argumento "greetings" y lo transfarmamos a lowerCase para que solo nos preocupemos por minusculas
    // 2. Usamos regex (expresiones regulares) para detectar si el string que me enviaron en greetings
    // contiene un saludo valido como: hello,ciao,salut,hallo,hola,ahoj,czesc
    // Ejemplo de string que podemos recibir:
    // "you paSA hOla! hOW you! bIen; qUe! You hOW you ahOJ, QUE: LA! QUE yoU doIng tres; tscHUSS. HeLlo PASa aRE? WiE lA PASA? haSta, HOmBRe qUE AHoJ! pasA"
    // después de convertirlo a minisculas:
    // "you pasa hola! how you! bien; que! you how you ahoj, que: la! que you doing tres; tschuss. ciao pasa are? wie la pasa? hasta, hombre que ahoj! pasa"
    
    const greeting = greetings.toLowerCase();
    
//     lo que esta entre /.../ se llama regex   test nos dice si el patron que dfinimos con regex 
//       y sirve para definir patrones que       esta presente en el string que le estamos pasando
//       queramos encontrar en un string          como argumento
//                         👇                          👇                                  
    res = /(hello|ciao|salut|hallo|hola|ahoj|czesc)/.test(greeting) //  validGreetings.includes() //regex here/.test(greetings) 
    console.log('res: ', res)
    return res
  }


/**
 * Truthy and Falsy
 */

// Un valor Truthy evalua a verdadero (sin ser el booleano "true")
// Un valor Falsy evalua a flaso (sin ser el booleano "false")
if ({}) {
    console.log('esto evalua a truthy')
  }  else {
      console.log('esto evalua a falsy')
  }


/**
 * operado ternario
 */

// ejemplo basico de operador ternario
const greeting = 'hola';

if(greeting) {
    console.log(greeting)
} else {
    console.log('El string esta vacio')
}

//    expresion a evaluar, resultado si la expresion evalua a true
//               👇          👇                   
const resut = greeting ? greeting : 'El string esta vacio';
//                                           👆
//                                   resultado si la expresión a evaluar dio falso   
console.log(resut)


// operador ternario para multiples expresiones

const otherGreeting = 'hola';

if(/hola/.test(otherGreeting)) {
    console.log('el string contiene la palabra hola');
} else if (/hello/.test(otherGreeting)) {
    console.log('el string contiene la palabra hello');
} else {
    console.log('no tiene la plabra hola ni la plabra hello')
}

//               expresion a evaluar,  resultado si la expresion evalua a true,   expresion si evaluo a falso   
//                       👇                                  👇                             👇
const result = /hola/.test(otherGreeting) ? 'el string contiene la palabra hola' : /hello/.test(otherGreeting) ? 'el string contiene la palabra hello' : 'no tiene la plabra hola ni la plabra hello';

console.log(result)