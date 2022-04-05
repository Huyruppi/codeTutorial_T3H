// Math Object

//Math.PI
console.log(Math.PI);

//Math.round
console.log(Math.round(1.4)); // 1
console.log(Math.round(1.6)); // 2

// Math.abs - gia tri tuyet doi
console.log(Math.abs(-4)); // 4

// Math.ceil
console.log(Math.ceil(4.00000001)); // 5
console.log(Math.ceil(4.00000000)); // 4

//Math.floor
console.log(Math.floor(5.1)); // 5
console.log(Math.floor(5.9)); // 5

//Math.random
console.log(Math.random());

//Random 0 - 9
console.log(Math.floor(Math.random() * 10));

//Example
var random = Math.floor(Math.random() * 10);

var  bonus = [
    '10 coin',
    '20 coin',
    '30 coin',
    '40 coin',
    '50 coin',
];

console.log(bonus[random]);

//Example 2
var random = Math.floor(Math.random() * 100); //100%

//tỉ lệ 50%
if (random < 50) { 
    console.log('Cường hóa thành công!');
}


//Math.min()

console.log(Math.min(-100, 1, 90, 50, 40)); //-100

//Math.max()

console.log(Math.max(-100, 1, 90, 50, 40)); //90


