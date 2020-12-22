var names = [
  'Himanshu Rohidas Gawari',
  'Hardik Rohidas Gawari',
  'Vijaya  Rohidas Gawari',
  'Rohidas Sakharam Gawari',
  'Akka Bagad',
];
log = console.log;
log('length', names.length);
log();

for (let i = 0; i < names.length; i++) {
  log(names[i]);
}
log();

for (let i = names.length - 1; i >= 0; i--) {
  log(names[i]);
}
log();

for (let props in names) {
  log('name', names[props]);
}
log();

var person = { fname: 'John', lname: 'Doe', age: 25 };
for (let prop in person) {
  log(prop, person[prop]);
}
log();
