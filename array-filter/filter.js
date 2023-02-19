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

function filter(array, predicate) {
  const newArray = [];
  array.forEach(element => {
    if (predicate(element)) {
      console.log(element);
      newArray.push(element);
    }
  });
  console.log(newArray);
  return newArray;
}

const evenNumbers = e => e % 2 === 0;
const startsWith = name => name.startsWith('E');

filter(numbers, evenNumbers);
filter(names, startsWith);
