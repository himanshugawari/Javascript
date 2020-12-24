//Array reduce method
//reduce all the values in an array into a single result
// Uses a callback function just like map, forEach, filter, etc
// array.reduce(callback, initialValue)
// also has a second parameter which is an initialValue

let numbers = [12, 34, 56, 78, 91];
//find the sum of all the numbers

let sum1 = numbers.reduce((acc, item) => {
  console.log(acc, item);
  acc += item;
  return acc;
}, 0);
console.log(sum1);

let movies = [
  //   'Alien',
  'Layer Cake',
  'Star Wars',
  'Star Trek',
  'Jaws',
  'Jurassic Park',
  'Gross Pointe Blank',
  'Eternal Sunshine of the Spotless Mind',
  'Memento',
  'Dog Soldiers',
  'The Host',
  'Gran Torino',
  'Close Encounters of the Third Kind',
  'Good Will Hunting',
  'Casino Royale',
  'Almost Famous',
];
//find the first movie alphabetically

let firstAlphabetMovie = movies.reduce((current, item) => {
  console.log(`Comparing ${current} to ${item}`);
  return current < item ? current : item;
}, '\u0434');
console.log('FIRST MOVIE IS ', firstAlphabetMovie);

let sum = numbers.reduce(function (passedIn, item) {
  //console.log(passedIn, item);
  return passedIn + item;
}, 0);
console.log('Total is', sum, '\n');

let first = movies.reduce(function (current, item) {
  console.log('comparing', current, 'to', item);
  return current < item ? current : item;
}, '\u0434');
console.log('First movie is', first);
