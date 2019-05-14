const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen in my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// some; is at least one person 19
const isAdult = people.some(person => {
  const currentYear = new Date().getFullYear();
  return currentYear - person.year >= 19;
});
//   console.log({isAdult});

const allAdult = people.every(person => {
  const currentYear = new Date().getFullYear();
  return currentYear - person.year >= 19;
});
// console.log({allAdult});

// find is like filter, but unlike  fileter, which return subset of the array, it returns the first item
const comment = comments.find(comment => {
  return comment.id === 823423;
});
// console.log(comment);

// findIndex; finds where in array is an item
const index = comments.findIndex(comment => comment.id === 823423);
console.log(index);
