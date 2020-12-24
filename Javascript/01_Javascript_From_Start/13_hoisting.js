// hoisting
// the process of taking two passes through the js file_exists
// first pass hoists all the declarations to the top of the file

var a;
var b = 5;

console.log(d); //undefined

c(); // will run
function c() {
  // function declaration
}

var d = 5;

e(); // undefined (considered as variable)
var e = function () {
  // function expression
};
