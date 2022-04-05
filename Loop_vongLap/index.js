
// Vong lap - Loop

// For loop p1

for (var i = 1; i <= 1000; i++) {
    //code
    console.log(i);
}

// For p2

var i = 1;

for (; i <= 1000;) {
    //code
    console.log(i);
    i++;
}

// For p3

var myArray = [
    'Javascript',
    'PHP',
    'Java',
    'Dart',
    'Ruby',
    'Python'
];

// console.log(myArray[0]);

var arrayLength = myArray.length;

for (var i = 0; i < arrayLength; i++) {
    console.log(myArray[i]);
}