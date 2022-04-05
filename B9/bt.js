// BT

/*
    b1: viet function chuyển đổi nhận vào một tham số là string
    function convertText(param) {
        //do something
    }
    convertText(background-color) ==> backgroundColor
    convertText(font-style) ==> fontStyle
*/

function convertText(param) {
    let result = param[0];
    for (let i = 1; i < param.length; i++) {
        if ((param[i] !== '-') && (param[i - 1] !== '-')) {
            result += param[i];
        } else if (param[i] === '-') {
            result += param.charAt(i + 1).toUpperCase();
        }
    }
    console.log(result);
}
convertText("font-style")
convertText("background-color")

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
let arrb2 = [2, 1, 7, 10, 20];

function getNumber(arr, start, end) {
    console.log(arr.filter(el => start <= el && el <= end));
}
getNumber(arrb2, 0, 7); // [2, 1, 7]
getNumber(arrb2, 10, 15); //10;
/*
    b3: 
    let arr = [5, 3, 8, 1];
    function getNumber(arr, start, end) {
        //do something
    }
    //in ra số nằm trong mảng trong khoảng start đến end và thay đổi mảng gốc
    getNumber(arr, 1, 4); // [3, 1]
*/
let arrb3 = [5, 3, 8, 1];

function getNumber2(arr, start, end) {
    let k = arr.filter(el => start <= el && el <= end)
    for (let i = 0; i < k.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (k[i] == arr[j])
                arr.splice(j, 1);
        }
    }
    console.log(k);
}
getNumber2(arrb3, 1, 4);
/*
    b4: method sort: viết 1 function sắp xếp mảng theo thứ tự giảm dần [8, 5, 2, 1, -20]
    let arr= [5, 2, 1, 10, 8];
*/
let arrb4 = [5, 2, 1, -20, 8];

function sortNumber(arr) {
    console.log(arr.sort((a, b) => b - a));
}
sortNumber(arrb4);
/*
    b5: sao chép 1 mảng không ảnh hưởng đến mảng gốc
    let ar = ["xin", "chao", "viet"];
    //viết 1 function sao chép mảng cho trước và trả về mảng mới 
*/
let arrb5 = ["xin", "chao", "viet"];

function copyArr(arr) {
    let map1 = arr.map(x => x);
    console.log(map1);
}
copyArr(arrb5);
/*
    b6: duyệt mảng và trả về mảng mới với nhân đôi giá trị với method map
    arr = [2, 3, 5, 6]; => [4, 6, 10, 12]
*/
let arrb6 = [2, 3, 5, 6];

function doubleArray(arr) {
    let map2 = arr.map(x => x * 2);
    console.log(map2);
}
doubleArray(arrb6);
/*
    b7: shuffle - đảo ngược, thay đổi random các vị trí trong array
    let arr = [1, 2, 3]
    shuffle(arr) => [3, 2, 1]
    shuffle(arr) => [2, 1, 3]
    shuffle(arr) => [1, 3, 2]
*/
let arrb7 = [1, 2, 3];

function suffle(arr) {
    console.log(arr.sort(() => Math.random() - 0.5));
}
suffle(arrb7);
suffle(arrb7);
suffle(arrb7);
/*
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
*/
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
let arrb8 = [Lan, Hung, Mai]

function calAverageAge(arr) {
    let sum = 0,
        total = 0;
    for (let key in arr) {
        sum += arr[key].age;
        total++;
    }
    console.log(sum / total);
}
calAverageAge(arrb8);
/*
    b9: 
    let arr = ["tien", "tung", "thap", "thao", "hue", "mai", "tien", "thap", "hue", "mai"];
    getUnique(arr); // tung, thao, mai 
*/
let arrb9 = ["tien", "tung", "thap", "thao", "hue", "tien", "thap", "hue", "mai"];

function getUnique(arr) {
    for (let i = 0; i < arr.length; i++) {
        let check = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (check !== arr[j]) {
                continue;
            } else if (check === arr[j]) {
                arr.splice(j, 1);
                arr.splice(i, 1);
            }
        }
    }
    console.log(arr);
}
getUnique(arrb9);