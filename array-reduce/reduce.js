const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

function reduce(array, reducer, initialValue) {
  let accumulator;
  if (initialValue != null) {
    accumulator = initialValue;
  } else {
    accumulator = array[0];
  }
  array.forEach(element => {
    accumulator = reducer(accumulator, element);
  });
  return accumulator;
}

const sum = (accumulator, currentValue) => accumulator + currentValue;
const product = (accumulator, currentValue) => accumulator * currentValue;
const balance = (balance, transaction) => {
  if (transaction.type === 'deposit') {
    balance += transaction.amount;
  } else {
    balance -= transaction.amount;
  }
  return balance;
};
const composite = (composite, trait) => {
  return Object.assign(composite, trait);
};

const result1 = reduce(numbers, sum);
console.log('sum: ', result1);

const result2 = reduce(numbers, product);
console.log('product: ', result2);

const result3 = reduce(account, balance, 0);
console.log('balance: ', result3);

const result4 = reduce(traits, composite);
console.log('composite: ', result4);
