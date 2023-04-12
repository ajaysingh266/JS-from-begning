// use prototype
// const userMethod = {
//     about: function () {
//         return `${this.firstName} is ${this.age} years old`
//     },
//     is18: function () {
//         return this.age >= 18;
//     },
//     sing: function () {
//         return 'toon na na na la la'
//     }
// }

// use start//
// function createUser(firstName, lastName, email, age, address) {
//     const user = Object.create(createUser.prototype);
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     return user;
// }
// // console.log(createUser.prototype);
// createUser.prototype.about = function () {
//     return `${this.firstName} is ${this.age} years old`
// };
//     createUser.prototype.is18 = function () {
//         return this.age >= 18;
//     };
//     createUser.prototype.sing = function () {
//         return 'toon na na na la la'
//     };

// const user1 = createUser("ajay", "singh", "ajay@ajay.com", 18, "my address");
// const user2 = createUser("aj", "singh", "aj@aj.com", 20, "my address");
// const user3 = createUser("aj", "chaudhary", "aj@aj.com", 25, "my address");
// console.log(user1.about());
// console.log(user3.sing());
// console.log(user1);

// new keyword //
// function createUser(firstName, age){
//     this.firstName = firstName;
//     this.age = age;
// }
// createUser.prototype.about = function(){
//     console.log(this.firstName, this.age);
// }
// const user1 = new createUser("ajay", 10);
// // new keyword
// // 1.) create empty object this = {}
// // 2.) return this
// // 3.) new key create chain of __proto__. no need to add chaining manually
// // Object.create(createUser.prototype); ye karne ki jarurt ni hai
// console.log(user1);
// user1.about();

//more about prototype//

// let number = [1,2,3];
// //prototype se methods milte hai dot laga ke
// // javascript array create karne ke liye construrctor use karta hai //new// keyword
// // for eaxmple
// // let numbers = new Array(1,2,3,4);
// console.log(number);
// console.log(Array.prototype);
// console.log(Object.getPrototypeOf(number));   


// class keyword
// 2015 ES16 mien aaya class keyword
// classses are fake
// function CreateUser(firstName, lastName, email, age, address) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
//     return this;
// }
// CreateUser.prototype.about = function () {
//     return `${this.firstName} is ${this.age} years old`
// }
// CreateUser.prototype.is18 = function () {
//     return this.age >= 18;
// }
// CreateUser.prototype.sing = function () {
//     return "lalalalalaalalala"
// }

// const user1 = new CreateUser("ajay", "singh", "ajay@ajay.com", 18, "my address");
// const user2 = new CreateUser("aj", "singh", "aj@aj.com", 20, "my address");
// const user3 = new CreateUser("aj", "chaudhary", "aj@aj.com", 25, "my address");
// console.log(user1);

// class then class ka name then curly braces
// class ya obeject ke ander jo function hote hai unhe methods bolte hai
class CreateUser {
    constructor(firstName, lastName, email, age, address) {                                      // constructor creates an object
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;                         // constructor return object
        this.age = age;
        this.address = address;
    }
    about(){return `${this.firstName} is ${this.age} years old`}
    is18(){return this.age >= 18;}
    sing(){ return "lalalalalaalalala"}
}
const user1 = new CreateUser("ajay", "singh", "ajay@ajay.com", 18, "my address");
// const user2 = new CreateUser("aj", "singh", "aj@aj.com", 20, "my address");
// const user3 = new CreateUser("aj", "chaudhary", "aj@aj.com", 25, "my address");
console.log(user1.about());
console.log(user1.firstName);
// console.log(Object.getPrototypeOf(user1));