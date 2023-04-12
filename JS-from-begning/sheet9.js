// store methods in different object
// const userMethod = {
//     about: function () {
//         return `${this.firstName} is ${this.age} years old`
//     },
//     is18: function () {
//         return this.age >= 18;
//     }
// }
// function createUser(firstName, lastName, email, age, address) {
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = userMethod.about;
//     user.is18 = userMethod.is18;
//     return user;
// }
// const user1= createUser("ajay","singh","ajay@ajay.com",18,"my address");
// const user2= createUser("aj","singh","aj@aj.com",20,"my address");
// const user3= createUser("aj","chaudhary","aj@aj.com",25,"my address");
// console.log(user1.about());
// console.log(user3.about());

// solution using object.create
// const userMethod = {
//     about: function () {
//         return `${this.firstName} is ${this.age} years old`
//     },
//     is18: function () {
//         return this.age >= 18;
//     },
//     sing: function(){
//         return 'toon na na na la la'
//     }
// }
// function createUser(firstName, lastName, email, age, address) {
//     const user = Object.create(userMethod);
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     // user.about = userMethod.about;
//     // user.is18 = userMethod.is18;
//     // user.sing = userMethod.sing;
//     return user;
// }
// const user1= createUser("ajay","singh","ajay@ajay.com",18,"my address");
// const user2= createUser("aj","singh","aj@aj.com",20,"my address");
// const user3= createUser("aj","chaudhary","aj@aj.com",25,"my address");
// console.log(user1.about());
// // console.log(user3.sing());
// console.log(user1);



// const obj = {
//     key1:"value1",
//     key2:'value2'
// }
// const obj2={
//     key3:'value3'
// }
// there is another way to create object
// const obj2 ={};
// obj2.key3 = "value3";
// console.log(obj2);
// there is another way to dreate object
// const obj2=Object.create(obj);                                      // return blank object
// console.log(obj2);                  
// obj2.key3 = "value3";
// console.log(obj2.key2);         // if we find the value of key2 then it will return obj1 key2 value 
// beacause obj2 base parent is obj1. so it return key2 value 
// __proto show it has parent obj1
// __proto__
// __proto__ is a reference
// official ecmascript documentation
// [[protoytpe]]
// __proto__ , [[prototype]]  both are same
// prototype        ye different prototype hai...    // ye prototype functions ke ander hoti hai
// console.log(obj2, __proto__);



// prototype

// function hello() {
//     console.log("hello World");
// }
// hello();
// javascript function is combo of ===> function + object
// console.log(hello.name);            // to get the name of function it is access as object. function name dot name.
// you can add your own properties
// for example
// hello.myOwnProperty = "vwry unique value";                      // working as object
// console.log(hello.myOwnProperty);
// name property ---> tells function name;
// function provides more useful properties like call, bind methods
// function hume free space provide karata hai---> but actual mien free space jaisa kuch bahi hota, free space mien 
// empty object {} ko bol rhe hai, is object ko hum bolte hai PROTOTYPE
// console.log(hello.prototype);                               // return empty object --> {}
// only functions provide prototype property

// hello.prototype.abc="abc";
// hello.prototype.xyz="xyz";
// hello.prototype.sing=function(){
//     return "ahahahaha"
// }
// console.log(hello.prototype);
// console.log(hello.prototype.sing());
