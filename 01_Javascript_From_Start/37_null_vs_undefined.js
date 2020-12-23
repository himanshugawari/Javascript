// null and undefined in Js
//
// null means nothing, void, emptiness
// and is intentionally set
//
// undefined means the container exists
// but hasn't been given a value yet
// functions with no return statement
// will return undefined by default

var x;
console.log(x); // undefined

function abc() {
  //nothing here
}
console.log(abc()); // undefined
function abc1() {
  //nothing here
  return null;
}
console.log(abc1()); // null

var y = global.blah;
console.log(y); // undefined

//var z = asdf.blah;
//console.log(z); // refernce error

var a = null;
console.log(a); // null

/**
console.log(typeof null);           // "object" 
console.log(typeof undefined);      // "undefined"
console.log(null === undefined);    // false
console.log(null  == undefined);    // true
console.log(null === null);         // true
console.log(null == null);          // true
console.log(undefined === undefined);   //true
console.log(undefined == undefined);    //true
console.log(!null);                 // true
console.log(isNaN(1 + null));       // false
console.log(isNaN(1 + undefined));  // true
**/
