// VALUES TYPES

const string = 'Hello'; // typeof(string) => 'string'
const integer = 42; // typeof(integer) => 'number'
const float = 0.42; // typeof(float) => 'number'
const trueBoolean = true; // typeof(trueBoolean) => 'boolean'
const falseBoolean = false; // typeof(falseBoolean) => 'boolean';

// ARRAYS
const array = [1, 2, 3];

// OBJECTS
const object = { firstName: 'Paul', lastName: 'MacCartney' };


// MANIPULATIONS

//// strings:

const firstName = "Paul";

console.log(firstName.toUpperCase()); // 'PAUL'
console.log(firstName.toLowerCase()); // 'paul'

const monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

const months = monthString.split(',');

console.log(months); // ['Jan', 'Feb', ...]
console.log(months.length); // 12

const sentence = `Hello ${firstName}!`;

console.log(sentence); // 'Hello Paul'


//// arrays:

///// CRUD
const fruits = ['kiwi', 'apple'];

fruits.push('banana'); // CREATE
console.log(fruits[0]); // READ
fruits[1] = 'blueberry'; // UPDATE
fruits.splice(0, 1); // DELETE

////// ITERATIONS
const beatles = ["paul", "john", "ringo", "george"];

beatles.forEach((beatle) => {
  console.log(beatle.toUpperCase());
});

console.log(beatles);

const upperCasedBeatles = beatles.map((beatle) => {
  return beatle.toUpperCase();
});

console.log(upperCasedBeatles);


//// objects:

////// CRUD
const person = {
  firstName: 'Paul',
  lastName: 'MacCartney'
};

person['job'] = 'singer'; // CREATE
person.job = 'singer'; // CREATE

console.log(person['firstName']); // READ
console.log(person.firstName); // READ

person.job = 'rocker'; // UPDATE

delete person.firstName; // DELETE
person.firstName = undefined;

Object.keys(person).forEach((key) => {
  const value = person[key];

  console.log(`${key} => ${value}`);
});


// FUNCTIONS

//// old syntax
// function square(x) {
//   return x * x;
// }
// const result = square(2);

// arrow syntax (inline)
const square = (x) => x * x;

const result = square(2);
console.log(result);

////// example

const string = 'welcome at le wagon';

const capitalize = (string) => {
  const firstLetter = string[0].toUpperCase();
  const restOfString = string.substring(1);

  return `${firstLetter}${restOfString}`;
};

const result = capitalize(string);

console.log('result:', result); // upperCased result
console.log('string:', string); // original string is not modified

