const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const people = [
  {
    name: "John",
    age: 10,
  },
  {
    name: "Viktor",
    age: 19,
  },
  {
    name: "Ernest",
    age: 40,
  },
  {
    name: "Jenner",
    age: 20,
  },
  {
    name: "Louis",
    age: 7,
  },
  {
    name: "Bruno",
    age: 3,
  },
  {
    name: "Amanda",
    age: 18,
  },
];

// Map

// const dobro = numbers.map((number) => { return { number: number*2 }});

const dobro = numbers.map((number) => number * 2);

const dobroMaisUm = dobro.map((dobro) => dobro + 1);

console.log("dobro", dobro);
console.log("dobro mais um", dobroMaisUm);

// Filter

const apenasPares = numbers.filter((numero) => numero % 2 === 0);

console.log("apenas pares", apenasPares);

const apenasImpares = numbers.filter((numero) => numero % 2 !== 0);

console.log("apenas impares", apenasImpares);

const menoresQueSete = numbers.filter((number) => number < 7);

console.log("apenas menores que sete", menoresQueSete);

const maioresOuIguaisSete = numbers.filter((number) => number >= 7);

console.log("maiores ou iguais a sete", maioresOuIguaisSete);

// Reduce

/*
reduce recieves a function and a initial value as parameters, in the function, there are two other, initialValue and currentValue
*/

// soma numeros -> modo convencional e com reduce

let soma = 0;

for (let i = 0; i < numbers.length; i++) {
  soma += numbers[i];
}

console.log("soma<convencional>", soma);

let somaReduce = numbers.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  0
);

console.log("soma<reduce>", somaReduce);

// using reduce to organize an object (over and under age)

const orderedPeople = people.reduce(
  (previousValue, currentValue) => {
    currentValue.age >= 18
      ? previousValue['over'].push(currentValue)
      : previousValue["under"].push(currentValue);
  
      return previousValue
    },
  { over: [], under: [] }
);

console.log(orderedPeople)

// exercises 

// 1 -> array squared

const input1 = [1, 2, 3, 4, 5];

const squared = input1.map(number => number**2);

console.log('array squared', squared);

// 2 -> sum of every positive number

const input2 = [ 1, -4, 12, 0, -3, 29, -150];

const positiveNumbers = input2.filter(number => number > 0).reduce((previousValue, currentValue) => {
  return previousValue+currentValue;
}, 0);

console.log('sum of every positive number', positiveNumbers)

// 3 -> get name initials

const input3 = 'George Raymond Richard Martin';
const names = input3.split(' ');

const initials = names.reduce((previousValue, currentValue, currentIndex) => {
  previousValue += currentValue[0]

  return previousValue;
}, '');

console.log('initials', initials);