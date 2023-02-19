// What is Array.prototype.map useful for?
// Array.prototype.map is useful when trying to call a funtion on every element within an array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

// doubled - all numbers multiplied by 2.
const doubled = numbers.map(number => number * 2);
console.log('doubled: ', doubled);

// prices - all numbers formatted into "$0.00" strings.
const prices = numbers.map(number => '$' + number.toFixed(2));
console.log('prices: ', prices);

// upperCased - all languages converted to uppercase.
const upperCased = languages.map(language => language.toUpperCase());
console.log('upperCased: ', upperCased);

// firstLetters - the first letter of each language.
const firstLetters = languages.map(language => language.charAt(1));
console.log('firstLetters: ', firstLetters);
