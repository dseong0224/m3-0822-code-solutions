const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

// evenNumbers - all numbers that are divisible by 2.
const result1 = numbers.filter(number => number % 2 === 0);
console.log('result 1: ', result1);

// overFive - all numbers that are greater than 5.
const result2 = numbers.filter(number => number > 5);
console.log('result 2: ', result2);

// startWithE - all names that start with a 'E'.
const result3 = names.filter(name => name.startsWith('E'));
console.log('result 3: ', result3);

// haveD - all names that include a 'D' or a 'd'.
const result4 = names.filter(name => name.toLowerCase().includes('d'));
console.log('result 4: ', result4);
