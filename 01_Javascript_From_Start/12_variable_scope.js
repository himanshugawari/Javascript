var name = 'HImanshu';

function x() {
  console.log(name); // himanshu
  name = 'hardik';
  console.log(name); // hardik
  other = 'vijaya';
}

x();
console.log(name); // hargik

y();

function y() {
  console.log(name); // hardik
  console.log(other); // vijaya
}
