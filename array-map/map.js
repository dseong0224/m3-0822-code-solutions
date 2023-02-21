const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

function map(array, transform) {
  const newArray = [];
  array.forEach(element => {
    newArray.push(transform(element));
  });
  console.log(newArray);
  return newArray;
}

const doubled = e => e + 3;
const prices = number => '$' + number.toFixed(2);
const upperCased = language => language.toUpperCase();
const firstLetters = language => language.charAt(0);

map(numbers, doubled);
map(numbers, prices);
map(languages, upperCased);
map(languages, firstLetters);
