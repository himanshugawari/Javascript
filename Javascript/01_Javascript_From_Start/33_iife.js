// IIFE -Immediatey Invoked Function Expression

(function doSomething() {
  // function statement , function declaration
  console.log('function statement, function declaration');
})(); // iife

var somethingElse = (function (nm) {
  // function expression
  console.log('function expressionn');
  return {
    name: nm,
    id: 123,
  };
})('Himanshu'); // iife and return to var
console.log(somethingElse);

// doSomething; // function name - does nothing
// doSomething(); // calls the function

// somethingElse;
// somethingElse();
