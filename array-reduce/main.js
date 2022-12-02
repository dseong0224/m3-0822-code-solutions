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

// sum - all numbers added together
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log('sum: ', sum);

// product - all numbers multiplied together
const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue);
console.log('product: ', product);

// balance - a number that is the result of combining all transactions in account. The correct answer is 180.
const balance = account.reduce((balance, transaction) => {
  const transactionAmount = transaction.amount;
  const transactionType = transaction.type;

  if (transactionType === 'deposit') {
    balance += transactionAmount;
  } else {
    balance -= transactionAmount;
  }
  return balance;
}, 0);

console.log('balance: ', balance);

// composite - an object that is the result of combining all properties of the objects within traits. composite should come out like this (property order doesn't matter):
const composite = traits.reduce((composite, trait) => {
  const traitKey = Object.keys(trait)[0];
  composite[traitKey] = trait[Object.keys(trait)[0]];
  return composite;
}, {});
console.log('composite: ', composite);
