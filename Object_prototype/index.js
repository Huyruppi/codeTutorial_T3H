// Object prototype

// Object constructor
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function () {
        return `${this.firstName} ${this.lastName}`
    }
}

User.prototype.className = 'javaScript';
User.prototype.getClassName = function () {
    return this.className;
}

var user = new User('Huy', 'Bùi', 'Avatar');
var user2 = new User('Sơn', 'Đặng', 'Avatar');

console.log(user.className);
console.log(user2.getClassName());

