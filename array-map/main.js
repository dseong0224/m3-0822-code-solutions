const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

// doubled - all numbers multiplied by 2.
const map1 = numbers.map(number => number * 2);
console.log('map1: ', map1);

// prices - all numbers formatted into "$0.00" strings.
const map2 = numbers.map(number => '$' + number.toFixed(2));
console.log('map2: ', map2);

// upperCased - all languages converted to uppercase.
const map3 = languages.map(language => language.toUpperCase());
console.log('map3: ', map3);

// firstLetters - the first letter of each language.
const map4 = languages.map(language => language.charAt(1));
console.log('map4: ', map4);
