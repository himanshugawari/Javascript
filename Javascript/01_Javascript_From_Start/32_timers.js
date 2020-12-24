function timmy(msg) {
  console.log('Message', msg);
}

let to = setTimeout(timmy, 1000, 'Hello');
clearInterval(to);

let int = setInterval(timmy, 1000, 'Hello');
clearInterval(int);
