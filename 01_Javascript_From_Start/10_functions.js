log = console.log;

let beer_cost = 6.25;
let burger_cost = 4.75;
let pop_cost = 3.0;

let account_balance = 15.75;

function checkBalance(amt) {
  if (account_balance - amt >= 0) {
    return true;
  }

  return false;
}

function drink_beer() {
  checkBalance(beer_cost)
    ? (account_balance -= beer_cost)
    : log('Insufficeient Funds');
  log(account_balance);
}
function eat_burger() {
  checkBalance(burger_cost)
    ? (account_balance -= burger_cost)
    : log('Insufficeient Funds');
  log(account_balance);
}
function drink_pop() {
  checkBalance(pop_cost)
    ? (account_balance -= pop_cost)
    : log('Insufficeient Funds');
  log(account_balance);
}

const mealList = [
  drink_beer,
  drink_pop,
  eat_burger,
  drink_beer,
  eat_burger,
  drink_beer,
];

function visitCarnival(foods) {
  for (let i = 0; i < foods.length; i++) {
    // foods[i]();
    // OR
    // foods[i].call();
    // OR
    // foods[i].apply();
    // OR
    let ans = foods[i].bind();
    ans();
  }
}
visitCarnival(mealList);
