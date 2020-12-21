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
