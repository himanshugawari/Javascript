var dog = { name: 'Woddy', type: 'dog' };
var cat = { name: 'Bob', type: 'cat' };
log = console.log;

log(dog);
log(cat);

var petNames = ['Woddy', 'Bob'];
log(petNames);

var pets = [dog, cat];
log(pets);

pets.push({ name: 'Roxy', type: 'dog' });
log(pets);
log(pets[2]);

cat.age = 2;
dog['age'] = 14;
log(pets);

pets[0].age = 12;
pets[2]['age'] = 6;
log(pets);
