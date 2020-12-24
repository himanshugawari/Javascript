// It will call a function once for each element
// in the array. The function will have direct
// access to the array element, the index number,
// and the entire array.

let dwarves = [
  'Bifur',
  'Bofur',
  'Bombur',
  'Fili',
  'Kili',
  'Oin',
  'Gloin',
  'Thorin',
  'Balin',
  'Dwalin',
  'Nori',
  'Dori',
];

// convert all the names to lowercase except Thorin.

// dwarves.forEach(output);
// function output(item, index, array) {
//   console.log(index, item);
// }

// dwarves.forEach(function (item, index, array) {
//   console.log(index, item);
// });

dwarves.forEach((item, index, array) => {
  if (item === 'Thorin') {
    item = item.toUpperCase();
  } else {
    item = item.toLowerCase();
  }
  console.log(index, item);
});
