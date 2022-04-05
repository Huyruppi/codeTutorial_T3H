// B1
// dung vong lap for ... in bien object
// simpleLove = {
//     a: 1,
//     b: 2,
//     c: "3",
//     d: "hello"
// }

let simpleLove = {
    a: 1,
    b: 2,
    c: "3",
    d: "hello",
};

let simpleLove2 = {
    a: 1,
    b: 2,
    c: "3",
    d: "hello",
    e: 6,
    f: "5",
};

function Love(param) {
    if (typeof param !== "object") {
        console.log("ban phai truyen vao la mot object !");
        return;
    }
    for (let el in param) {
        // b1 chuyen doi ve Number
        let isNumber = Number(param[el]);
        if (!isNaN(isNumber)) {
            param[el] = param[el] * 2;
        } else {
            param[el] = param[el];
        }
    }
    console.log(param);
}

Love(simpleLove);
Love(simpleLove2);

// B2

let simpleLove3 = {
    a: 1,
    b: 2,
    c: "3",
    d: "hello",
    e: 200,
    f: 355,
    c: 6,
};

// dung vong lap for ... in bien object lay cac value laf so chan trong object
// kq: 2, 200, 6

function getNumber(param) {
    if (typeof param !== "object") {
        console.log("ban phai truyen vao la mot object !");
        return;
    }
    for (let el in param) {
        if (param[el] % 2 === 0) {
            console.log(param[el]);
        }
    }
}

getNumber(simpleLove3);

//B3

let simpleLove4 = {
    a: 1,
    b: 2,
    c: "3",
    name: "Lan",
};

// duyet qua object voi for ... in va su dung cau lenh dieu kien de kiem 
// tra key name co hia tri la Lan hay khong. Neu co thi doi ten thanh Ngoc 
// nguoc lai neu khong thi giu nguyen

let keyWord = "Lan";
function checkLan(param){
    if(typeof(param) !== 'object') {
        confirm.log("ban phai truyen vao la mot object !")
        return;
    }
    for (const key in param) {
        if (param[key] === keyWord){
            param[key] = "Ngoc"
        }
    }
    console.log(param)
}

checkLan(simpleLove4);