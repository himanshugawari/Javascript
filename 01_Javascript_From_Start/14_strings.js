let str1 = new String('Toy Story');
let str2 = String('Wall-e');
let str3 = 'Cars';

log = console.log;

log(str1.toUpperCase());
log('Monsters Inc.'.toLowerCase());

log(str1.substring(4));
log(str2.substring(4, 5));
log(str2.indexOf('-'));
log(str1.lastIndexOf('o'));
log(''.concat(str1, ' ', str2, ' ', str3));

log('cat'.charAt(1));
log('cat'[1]);

let s_prim = 'foo';
let s_obj = new String(s_prim);

console.log(typeof s_prim); // Logs "string"
console.log(typeof s_obj); // Logs "object"

let s1 = '2 + 2'; // creates a string primitive
let s2 = new String('2 + 2'); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"

// A String object can always be converted to its primitive counterpart with the valueOf() method
console.log(eval(s2.valueOf())); // returns the number 4

let longString =
  'This is a very long string which needs ' +
  'to wrap across multiple lines because ' +
  'otherwise my code is unreadable.';
log(longString);

let longString1 =
  'This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.';
log(longString1);

log(longString1.includes('my code'));
log(longString1.includes('my&code'));

let regex = /[abc]/;
var regString = '123anm';
log(regString.match(regex));
log(regString.search(regex));

log(regString.replace('123', '987'));

log(longString.split(' '));
