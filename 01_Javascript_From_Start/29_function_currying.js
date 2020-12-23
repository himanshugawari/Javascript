// Function Currying
//In JavaScript, functions are first-class objects,
// just like String, Number, Boolean
//This means that they can be passed to functions or returned from functions
//

function greet(msg) {
  //console.log(msg);
  return function (name) {
    console.log(msg, name);
    //console.log('Hi', name);
  };
}
greet('hi')('Tom');
greet('Hej')('Inga');
greet('Hola')('Carlos');
greet('Tag')('Mattias');

let english = greet('Hi');
let svenska = greet('Hej');
let espanol = greet('Hola');
let deutsch = greet('Tag');
english('Tom');
svenska('Inga');
espanol('Carlos');
deutsch('Mattias');

// function x(a) {
//   console.log('x');
//   a(); //will execute function y
//   return a;
// }
// function y() {
//   console.log('y');
// }
// let b = x(y); //calling function x
// b();
