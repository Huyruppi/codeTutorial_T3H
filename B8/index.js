 let sampleInfo2 = {
     getPhone:'83628',
     name: 'test',
     age: 44,
     xinchao: function() {
         console.log(this.name); //this.name === sampleInfo2.name
     },
     contact: {
         phone: sampleInfo2.getPhone, // 83628
         email: 'test@gmail.com',
         aboutMe: function() {
             console.log(this.email); // test@gmail.com
         },
         aboutUs: function() {
            console.log(this.phone); // 83628
        }
     }
 }

 sampleInfo2.xinchao(); //test


let sample = {
     name: 'xinchao',
     age: 20
 }

 let sample2 = {
    name: 'hello',
    age: 21
}

let sample3 = {
    name: 'hi',
    age: 22
}

function Sample(name1, age1) {
    this.name = name1;
    this.age = age1;
}
 
let sample4 = new Sample('sample4', 21);
sample4.name; // sample4
sample4.age; // 21

let sample5 = new Sample('sample5', 20);

// contrutor
function User(name) {
    this.name = name;
    this.sayHello = function() {
        console.log(this.name)
    }
}

let John = new User("sayHi");
John.sayHello(); // sayHi

// Array
let y = {
    name: 'test',
    age: 20
}

let z = {};
let x = new Object();

let array = []; //array
const array2 = new Array();

const class1 = ["a", "b", null, undefined, 3];
const class2 = [
    {
        name: 'test',
        age: 20
    },
    "s",
    544
];

