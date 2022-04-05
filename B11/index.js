// CONST and Let
const name = "a";

const Person = {
    name: "test",
    age: 18,
};
Person.name = "simple";

const nums = [1, 2, 3, 4, 5, 6];
nums.push(6);

// Arrow function
function name2(name) {
    console.log(`hello ${name}`);
} // regular function

const sayHi = (name) => console.log(`hello ${name}`);

// forEach
/*
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((el, index) => console.log(el, index));

// Map 

const getNumber = numbers.map((el, index) => el % 2 === 0); // [2, 4] //  return new array
*/

// example 2
const flowers = ["lan", "hoalan", "hoamai", "hoacuc", "hoadao"];
flowers.forEach((el, index) => console.log(el, index));

const getNumber = flowers.map((el, index) => el.slice(0, -1).toLocaleUpperCase);

// Filter
const people = [
    { 
      id: 1,
      name: "t1" 
    },
    { 
      id: 2,
      name: "t3" 
    },
    { 
      id: 3,
      name: "t3" 
    },
    { 
      id: 3,
      name: "t3" 
    },
];

const people3 = people.filter(person => person.id !== 3);

// Spread

// Destructuring

// Classes

// Modules
