
// Toan tu 3 ngoi - ternary operator

var cource = {
    name: 'Javascript',
    coin: 250
}

// if (cource.coin > 0) {
//     console.log(`${cource.coin} Coin`);
// } else {
//     console.log('Miễn phí');
// }

var result = cource.coin > 0 ? `${cource.coin} Coin` : 'Miễn phí'
console.log(result);

var a = 0;
// var a = 1;
var b = 2;

var c = a > 0 ? a : b;
console.log(c);