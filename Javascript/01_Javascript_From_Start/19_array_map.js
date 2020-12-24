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

console.log(dwarves);
let newDwarves = dwarves.map((item, index, array) => {
  return item.length;
});
console.log(newDwarves);
