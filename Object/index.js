// Object

var emailKey = 'email';

var myInfo = {
    name: 'Huy Bui',
    age: 18,
    address: 'Ha Noi, VN',
    phone: '23663903278',
    [emailKey]: 'huybui@gmail.com',
    getName: function() {
        return this.name;
    },
    getAge: function () {

    }
};

// Add Key
// myInfo['my-email'] = 'huybui@gmail.com';

// var myKey = 'address';

// console.log(myInfo[myKey]);

// Delete Key
// delete myInfo.age;
// delete myInfo.address;

// console.log(myInfo);

console.log(myInfo.getName());

//Function ---> Phương thức / Method
// Others ---> Thuộc tính / Property




