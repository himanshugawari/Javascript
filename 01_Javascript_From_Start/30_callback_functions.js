// Callback functions
//built-in callback functions
//setTimeout, Arr.forEach, geolocation.getCurrentPosition
//make your own callback functions

setTimeout(hello, 2000, 'Bob');

let names = ['Inga', 'Tom', 'Mattias', 'Carlos'];
names.forEach(hello);

function doThing(other) {
  let x = 7;
  //do lots of other things
  //...
  let name = 'Steve';
  other(name);
}

function hello(nm, idx, arr) {
  console.log('hello', nm);
}

// doThing(hello);

// Works in Browser
// navigator.geolocation.getCurrentPosition(gotPosition, positionError, {});

// function gotPosition(pos) {
//   console.log('Postion', pos);
// }
// function positionError(err) {
//   console.log('Error', err);
// }
