// Array

// add/ remove items
// let arr = [];
// arr.push(...item); // add item to the end
// arr.pop(); //remove/ extract an item to the end
// arr.shift(); //remove/ extract an iteam from begining
// arr.unshift(...items); //adds items to the begining

//qs1: thêm một phần tử vào cuối mảng
let arr2 = [5, 6, 7, 8];
//          0  1  2  3
arr2.push(9); //   [5, 6, 7, 8, 9]
//                  0  1  2  3  4
//qs2: thêm một phần tử vào dầu mảng
let arr3 = [5, 6, 7, 8];
//          0  1  2  3
arr3.unshift(4); //  [4, 5, 6, 7, 8]
//                    0  1  2  3  4

// Method array



//1 splice - xóa, thay thế phần tử từ mảng
let obj = {
    a: 1,
    n: 2
}
delete obj.n; // remove n from obj

//example
let arr4 = ["I", "love", "u"];
arr4.splice(1,2);
arr4; // ["I", "u"];

let arr5 = ["i", "U", "T", "V", "z"];
//           0    1    2    3    4
arr5.splice(0, 3, "Test", "sAMPLE"); // ["Test", "sAMPLE", "V", "z"]

let arr6 = ["i", "U", "T", "V", "z"];
arr6.splice(-1, 0, 4, 5); // ["i", "U", "T", "V", 4, 5, "z"]



//2 array.slice - tạo mảng mới lấy từ mảng cũ
let arr7 = ["i", "U", "T", "v", "z"];
//           0    1    2    3    4
arr7.slice(1, 3); // ['U', 'T']

//3 array.concat - tạo mảng mới gộp từ mảng cũ
let con = [1, 2, 3];
con.concat([3, 4]); // 1, 2, 3, 4
con.concat([5, 6], [7, 8]); //1, 2, 3, 4, 5, 6, 7, 8

// object for...in
// array for...of

// forEach
let arr = [1, 2, 3];
arr.forEach(function(item, index, array) {
    //do something
});

let arr8 = ["i", "love", "u"];
arr8.forEach(function (el, index) {
        console.log(el + index);
});
arr8;

// for
let simple = ["t", "i", "v", "i"];
for(let i = 0; i<= simple.length; i++) {
    console.log(simple[1] + i);
}

// searching in array
// indexOf, lastIndexOf and includes

let arr10 = [2, 0, 10, "lan", false, 2];
// search number 10 in array
arr10.indexOf(2);// 0

// requiment: viet 1 funtion search gia tri nhap vao
function searchValue(value, arr) {
    if(typeof arr !== "object") return;
    if(arr.indexOf(value) !== -1) {
        console.log(`phần tử ${value} nằm ở vị trí số ${arr.indexOf(value)} trong mảng !` );
        return;
    } else {
        console.log(`giá trị ${value} không tồn tại trong mảng !`)
    }
}

//toan tu 3 ngoi
function searchValue(value, arr) {
    if(typeof arr !== "object") return;

    arr.indexOf(value) !== -1 
    ? console.log(`phần tử ${value} nằm ở vị trí số ${arr.indexOf(value)} trong mảng !` )
    : console.log(`giá trị ${value} không tồn tại trong mảng !`)
}

//includes
arr10.includes(2); // true
arr10.includes(200); // false
arr10.indexOf(2);// 0
arr10.lastIndexOf(2); // 5


// find and findIndex
let users = [
    {id: 1, name: "J"},
    {id: 2, name: "U"},
    {id: 3, name: "Q"},
];

// arrow function
() => console.log(123);

let user = users.find((item) => item.id === 2 );
console.log(user); // {id: 2, name: "U"}
user.name; // U
user.id; //2

let userf = users.findIndex((item) => item.id === 2 ); 
console.log(userf); // 1

//5 filter
let  arrf = [1, 3, 4, 5];
arrf.filter(el => el > 2); //3, 4, 5
//map, port...

// BT

/*
    b1: viet function chuyển đổi nhận vào một tham số là string
    function convertText(param) {
        //do something
    }
    convertText(background-color) ==> backgroundColor
    convertText(font-style) ==> fontStyle
*/

/*
    b2: filter
    let arr = [2, 1, 7, 10, 20];
    function getNumber(arr, start, end) {
        //do something
    }

    //in ra số nằm trong mảng trong khoảng start đến end và không thay đổi mảng gốc
    getNumber(arr, 0, 7); // [2, 1, 7]
    getNumber(arr, 10, 15); // [10]
*/

/*
    b3: 
    let arr = [5, 3, 8, 1];
    function getNumber(arr, start, end) {
        //do something
    }
    //in ra số nằm trong mảng trong khoảng start đến end và thay đổi mảng gốc
    getNumber(arr, 1, 4); // [3, 1]
*/

/*
    b4: method sort: viết 1 function sắp xếp mảng theo thứ tự giảm dần [8, 5, 2, 1, -20]
    let arr= [5, 2, 1, 10, 8];
*/

/*
    b5: sao chép 1 mảng không ảnh hưởng đến mảng gốc
    let ar = ["xin", "chao", "viet"];
    //viết 1 function sao chép mảng cho trước và trả về mảng mới 

    b6: duyệt mảng và trả về mảng mới với nhân đôi giá trị với method map
    arr = [2, 3, 5, 6]; => [4, 6, 10, 12]

    b7: shuffle - đảo ngược, thay đổi random các vị trí trong array
    let arr = [1, 2, 3]
    shuffle(arr) => [3, 2, 1]
    shuffle(arr) => [2, 1, 3]
    shuffle(arr) => [1, 3, 2]

    b8: 
    let Lan = {
        name: 'Lan',
        age: 20
    }
    let Hung = {
        name: 'Hung',
        age: 18
    }
    let Mai = {
        name: 'Mai',
        age: 22
    }
    let arr = [Lan, Hung, Mai]
    
    //viet function calAverageAge(arr) - tính trung bình tuổi // (20 + 18 + 22) / 3 => ?

    b9: 
    let arr = ["tien", "tung", "thap", "thao", "hue", "mai", "tien", "thap", "hue", "mai"];
    getUnique(arr); // tung, thao, mai 
*/

// array.sort
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort((a, b) => a - b);
console.log(array1);
// [1, 4, 21, 30, 100000]