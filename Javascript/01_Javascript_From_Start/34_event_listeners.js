// JavaScript Event Listeners
// Event-driven programming: your program waits for events and uses them as triggers to run the next function(s)
// event bubbling and popogation
// element.addEventListner(type,function,useCapture)
// useCapture (default is false i.e Bubbling)

document.addEventListener('DOMContentLoaded', init);

function init() {
  let btn = document.getElementById('btn');
  let lnk = document.getElementById('lnk');
  let txt = document.getElementById('txt');

  txt.addEventListener('input', (ev) => {
    console.log(ev.type, ev.target, ev.target.value);
  });
  txt.addEventListener('change', (ev) => {
    console.log(ev.type, ev.target, ev.target.value);
  });
  txt.addEventListener('blur', (ev) => {
    console.log(ev.type);
  });
  lnk.addEventListener('click', (ev) => {
    ev.preventDefault();
    console.log(ev.type, ev.target);
  });
  btn.addEventListener('click', buttonClicked);
}

function buttonClicked(ev) {
  console.log(ev.type, ev.target, ev.currentTarget);
}

//function linkClicked(ev){
//    ev.preventDefault(); //stop the link from being followed
//    console.log(ev.type, ev.target, ev.currentTarget);
//}

// object.addEventListener(event, function)

//myDiv.addEventListener('click', doSomething )

//function doSomething(ev){
//    console.log( ev.type )//click
//    console.log( ev.target )
//    return 7;
//}

// Event Bubbling and Propagation
//  element.addEventListener( type, func, useCapture);

let m = document.getElementById('m');
let d = document.getElementById('d');
let p = document.getElementById('p');
let s = document.getElementById('s');
let log = console.log;

let highlight = (ev) => {
  //add CSS class "gold" to the clicked element
  ev.stopPropagation();
  let target = ev.currentTarget;
  target.className = 'gold';
  reset(target);
};

let reset = (_element) => {
  setTimeout(() => {
    _element.className = '';
  }, 2000);
};

d.addEventListener('click', (ev) => {
  ev.stopImmediatePropagation();
  log("Hi I'm a DIV");
});

[m, d, p, s].forEach((element) => {
  element.addEventListener('click', highlight);
});

// Keyboard events in the Browser
//ev.char || ev.charCode || ev.which
// keydown keyup keypress

let log = console.log;

document.addEventListener('DOMContentLoaded', init);

function init() {
  let txt = document.getElementById('txt');
  txt.addEventListener('keydown', anyKey);
  document.body.addEventListener('keydown', anyKey);
}

function anyKey(ev) {
  //log( ev.type, ev.target);
  let target = ev.currentTarget;
  let tag = target.tagName;
  let char = ev.char || ev.charCode || ev.which;
  //log(char, tag);
  let s = String.fromCharCode(char);
  //log(s);
  switch (char) {
    case 37:
      log('LEFT');
      break;
    case 40:
      log('DOWN');
      break;
  }
}
