const { comment, greetingFromModuleA } = require('./module-a');
const moduleA = require('./module-a');  // = {greetingFromModuleA,comment}

console.log(moduleA.comment);

console.log(comment)
console.log(greetingFromModuleA)

const operations = require('./module-b');

console.log(operations.multiply(1,1));

// es lo mismo que lo de arriba
// console.log(require('./module-b')(1,1));