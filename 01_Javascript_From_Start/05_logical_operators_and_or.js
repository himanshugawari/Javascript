// Binary Logical Operators
// AND &&
// OR ||

let ingredients = ['lettuce', 'chedder', 'chicken'];

let sandwichHas = function (ingredient) {
  for (let i of ingredients) {
    if (i === ingredient) {
      return true;
    }
  }
  return false;
  //if this line omitted it returns undefined
  //which is also a falsey value
};

if (sandwichHas('chicken') || sandwichHas('egg')) {
  console.log('Sandwich has chicken');
} else {
  console.log('No chicken');
}

if (sandwichHas('lettuce') && sandwichHas('onion')) {
  console.log('it has both');
} else {
  console.log('it has NOT both but maybe one of them');
}

if (
  (sandwichHas('cheddar') && sandwichHas('onion')) ||
  (sandwichHas('onion') && sandwichHas('tomato'))
) {
  console.log('cheese and lettuce ... OR onion');
} else {
  console.log('failed final test');
}
