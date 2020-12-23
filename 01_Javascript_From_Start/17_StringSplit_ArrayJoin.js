//String split and Array join methods
//converting Strings to Arrays and Arrays to Strings
//String to Array   str.split();
//Array to String   arr.join();
//

let sentence = 'Hello my name is Inigo Montoya';

let words = sentence.split(' ');
console.log(words);

let words1 = sentence.split(' ').sort();
console.log(words1);

let chars = sentence.split('');
console.log(chars);

let chars1 = sentence.split('').sort();
console.log(chars1);

let hyphenated = words.join('-');
console.log(hyphenated);
let oneWord = words.join('');
console.log(oneWord);

let x = sentence.split(' ').sort().join(' ');
console.log(x);
