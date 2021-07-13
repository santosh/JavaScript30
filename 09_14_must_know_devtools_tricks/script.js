const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  // go to elements panel, and do 'break on > attribute modification'
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// regular log
console.log('hello');

// old interpolated
console.log('Hello, I am %s', 'Santosh');

// new interpolated
console.log(`Hello, ${'You can also use variables here.'}`);

// styled
console.log('%c I ❤ DevTools.', 'color: red;'); // any kind of text based cs accepted

// warning
console.warn('I am warning you! 😠');

// error
console.error('Fuck!! That gave an error.');

// info
console.info('Crocodiles eat 3-4 people per year.');

// assertion
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong!');

// clear the console
console.clear();

// viewing DOM elements
console.dir(p); // similar to python no?

// grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}.`);
  console.log(`${dog.name} is ${dog.age} years old.`);
  console.groupEnd();
});

// counting
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Wes');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/santosh').then(data =>
  data.json().then(data => {
    console.timeEnd('fetching data');
    console.table(data);
  })
);

console.log(
  'To start over, to go script file and comment all. Then start uncommenting from start.'
);
