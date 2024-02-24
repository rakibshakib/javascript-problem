const fruits = [
  "Apple",
  "Watermelon",
  "Apple",
  "Strawberry",
  "Cherry",
  "Grape",
  "Mango",
  "Banana",
  "Melon",
  "Strawberry",
  "Cherry",
];

const uniqueFruits = fruits.reduce(
  (prevArr, item) => (prevArr.includes(item) ? prevArr : [...prevArr, item]),
  []
);

const uniqueFruitList = [...new Set(fruits)];
// output: [ 'Apple', 'Watermelon', 'Strawberry','Cherry','Grape','Mango','Banana', 'Melon' ]
// author: rakibshakib