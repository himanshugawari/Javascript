var names = ['luke', 'Leia', 'Han', 'Chewie'];
log = console.log;
log(names);
log(names.length);
log(names[names.length - 1]);

names.push('Anakin');
names.push('Obiwan');
log(names);

names.pop();
names.pop();
log(names);

names.unshift('C3P0');
names.unshift('R2D2');
log(names);

names.shift();
names.shift();
log(names);

// splice(starting index,no. of elements,replaceing elements)
names.splice(0, 1, 'Rey');
log(names);

names.splice(1, 2, 'kylo');
log(names);

names.splice(1, 1, 'C3P0', 'R2D2');
log(names);

names.splice(1, 2);
log(names);

names.push('BB8');
names.push('Obiwan');
log(names);

log(names);
names.reverse();
log(names);
names.sort();
log(names);

names.push('Obiwan');
log(names);

var position = names.indexOf('Luke');
log(position); //not found return -1
var position = names.indexOf('Obiwan');
log(position); // found returns actual index
var position = names.lastIndexOf('Obiwan');
log(position); // found returns actual index
