// What is "syntactic sugar" ?
// Syntactic sugar allows for a more concise or easier-to-read syntax without changing the underlying functionality of the code

// What is the typeof an ES6 class?
// function

// Describe ES6 class syntax.
// class Person {
// constructor(name, age) {
//   this.name = name;
//   this.age = age;
// }

// What is "refactoring" ?
// Refactoring is the process of improving the looks and structure of existing code without changing its behavior

class ExampleClass {

}

const example = new ExampleClass();

console.log('typeof example:', typeof example);
console.log('value of example:', example);

console.log('typeof example.__proto__', typeof example.__proto__);
console.log('value of example.__proto__', example.__proto__);

console.log('typeof ExampleClass.prototype:', typeof ExampleClass.prototype);
console.log('value of ExampleClass.prototype:', ExampleClass.prototype);

console.log('example instanceof ExampleClass', example instanceof ExampleClass);
