// Command rẽ nhánh - if else

var date = 9;

if (date === 2) {
    console.log('Hôm nay là thứ 2');
} else if (date === 3) {
    console.log('Hôm nay là thứ 3');
} else if (date === 4) {
    console.log('Hôm nay là thứ 4');
} else {
    console.log('Không biết');
}

//Switch

var date = 3;

switch(date) {
    case 2: 
        console.log('Hôm nay là thứ 2');
        break;
    case 3: 
        console.log('Hôm nay là thứ 3');
        break;
    case 4: 
        console.log('Hôm nay là thứ 4');
        break;
    case 5: 
        console.log('Hôm nay là thứ 5');
        break;
}

//
// var date = 3;
var date = 9;

switch(date) {
    case 2: 
    case 3:
    case 4: 
        console.log('Hôm nay là thứ 2, 3, 4');
        break;
    case 5: 
        console.log('Hôm nay là thứ 5');
        break;
    default: 
            console.log('Không biết')
}

//Use
// dung if...else khi chưa biết giá trị, so sánh đúng hay sai
// dùng switch...case khi giá trị cho trước, case >= 3
