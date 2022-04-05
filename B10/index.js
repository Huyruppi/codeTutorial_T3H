// call back

//method
// function sum(a, b) {
//     return a + b;
// }

// function loadSum(a, callBack) {
//     return a + callBack();
// }

// loadSum(1, sum(2, 4));

//them script 
function loadScript(src, callBack) {

    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callBack(script);
    document.head.append(script);
}

loadScript('./hello.js', (script) => {
    console.log('hello hi');
    console.log('script', script);
})

// let a = () => {} //arrow function
// funtion (a) {} // regular function

// synchornous 
let a = 1 + 2;
let b = 3 + 1;

// asynchronous - promise and async-await

// handling error
function loadScript2(src, callBack) {
    debugger;
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callBack(script);
    script.onerror = () => callBack(new Error(`scritp load error ${scr}`));
    document.head.append(script);
}

loadScript2('daasd', (script) => {
    console.log('script', script);
})

loadScript2('./hello.js', (err, script) => {
    if(err) {
        // display
    } else {
        // script load
    }
})

//callback hell

//promise
let promise = new Promise((resolve, reject) => {
    // executor
})
//resolve (value) => value
// reject(err) => err

//state: pending => resolve: fulfilled
//state: pending => reject: rejected
// result: undefined => resolve: value
// result: undefined => reject: error

//example
let PromiseDone = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done"),1000)
})

//then
PromiseDone.then((result) => console.log("result", result));

let PromiseErr = new Promise((resolve, reject) => {
    setTimeout(() => reject("sory..."),1000)
})

//then
PromiseErr.then((err) => console.log("err", reject));

function loadScript3(src) {
    return new Promise(function(result, reject){
        let script = document.createElement('script');
        script.src = src;
        script.onload = () => result(script);
        script.onerror = () => reject(new Error(`script load error ${src}`));
        document.head.append(script);
    })
}

// example 
let promiseLoadScript1 = loadScript3("./hello.js")
promiseLoadScript1.then(
    script => console.log(`script ${script}`),
    console => console.log(`error ${script}`),
).then((res) => console.log(res)
).catch(err => console.log(err))

// example
function delay(ms) {
    return new Promise((resolve, reject) => setTimeout(resolve, ms))
}
delay(3000).then(() => console.log('xin chao cac ban')).then(() => console.log(" the end "))


//try {} catch(err) {}

try {
    alert("something else")
} catch(err) {
    alert(err);
}

// fetch - call api from server
if(Boolean){

} else {

}

let api = 'https://jsonplaaceholder.typicode.com/tosos/1';
function callApi(url) {
    try {
        fetch(url).then(result => result.json()).then(data => console.log(data))
    } catch (error) {
        console.log("err network", err);
    }
}

callApi(api);