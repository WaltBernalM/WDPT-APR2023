// primitive types: stored in the stack
const name = "Ana";
const age = 21;

// reference types (objects and array): stored in the heap
const girl = {
    name: 'Yolanda',
    age: 29
}

console.log("name: ", name)
console.log("age: ", age)
console.log("girl: ", girl)

// copied by value
let newName = name;
console.log("newName: ", newName);

newName = 'Rose';
console.log("newName: ", newName);

// copied by reference
// const newGirl = girl;

// newGirl.name = 'Elena';


// console.log("girl: ", girl);
// console.log("newGirl: ", newGirl);


// Shallow Copy de un objeto usando Object.assign

// yo quiero genrar una copia
// const newGirl = Object.assign({
//     colorEyes: 'green'
// }, girl);
// newGirl.name = 'Elena';
// console.log("girl: ", girl);
// console.log("newGirl: ", newGirl);

// shallow copy con el spread operator
const newGirl = { colorEyes: 'green', ...girl };
newGirl.name = 'Elena';
console.log("girl: ", girl);
console.log("newGirl: ", newGirl);