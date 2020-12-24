//Object.assign(target, sources... ) method
// used to copy objects OR
// to merge objects

// let obj1 = { arms: true, armCount: 2 };
// let obj2 = { weapons: ['missle launcher', 'reciprocating saw'] };
// let obj3 = { canMove: true, legs: 0, treads: 2 };

// console.log(Object.assign({}, obj1));
// console.log(Object.assign({ hand: 'left' }, obj1));
// console.log(Object.assign({}, obj1, obj2, obj3));

function moveJson(Path, NewItem) {
  eval(Path).children.push(eval('NewItem')); // makes a copy of NewItem at the Path location
  eval('delete ' + NewItem); // this is the tricky part
}

moveJson('jsonData[0]["children"][1]["children"][0]', jsonData[1]); // Doesn't work
moveJson('jsonData[0]["children"][1]["children"][0]', 'jsonData[1]'); // Works
