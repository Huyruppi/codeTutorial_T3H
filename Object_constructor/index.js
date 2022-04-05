// Object constructor

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function () {
        return `${this.firstName} ${this.lastName}`
    }
}

var author = new User('Huy', 'Bùi', 'Avatar');
var user = new User('Sơn', 'Đặng', 'Avatar');

author.title = 'Welcome to website';
user.comment = 'comment ^^'
console.log(author.getName());
console.log(user.getName());

