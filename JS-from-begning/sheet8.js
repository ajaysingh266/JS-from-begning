//methods
// methods are inside object 

// const person={
//     firstName:'Ajay',
//     age:20,
//     about:function(){
//         // console.log(`person name is ${firstName}, age is ${age}`);              // this will show error that firstname and age is not defined
//         console.log(`person name is ${this.firstName}, age is ${this.age}`);       // this keyword always imppact on result 
//         // this ki value hume tab nahi pta lagti jb hum code likhte hai, this ki value result pe pata lagti hai
//         // runtime value
//         // this means full object
//         console.log(this);
//     }
// }
// person.about()
// function personInfo(){
//     console.log(`person name is ${this.firstName}, age is ${this.age}`); 
// }

// const person={
//     firstName:'Ajay',
//     age:20,
//     about:personInfo
// }
// const person1={
//     firstName:'Singh',
//     age:18,
//     about:personInfo
// }
// const person2={
//     firstName:'Aj',
//     age:8,
//     about:personInfo
// }
// person1.about();
// person2.about();
// person.about();

// console.log(this);                                  // if we log this directly we will receive window object
// console.log(window);                                   // provide same output window object
// this==window;                                       // true    


// call method
// function hello(){
//     console.log("hello world");
// }
// hello.call();

// const user1={
//     firstName:"Ajay",
//     age:8,
//     about: function(hobby, favMusician){
//         console.log(this.firstName, this.age,hobby, favMusician);
//     }
// }

// const user2={
//     firstName:"Singh",
//     age:12
// }
// user1.about();
// // if we want to borrow about for user2 then Call method is called//
// user1.about.call(user2,"guiter","Sonu");                        // in this user2 is bind with this
// // user1.about.call();                                 // return ans undefined undefined

// function about(hobby, favMusician){
//     console.log(this.firstName, this.age,hobby, favMusician);               // if function is universal
// }
// const user1={
//     firstName:"Ajay",
//     age:8,

// }

// const user2={
//     firstName:"Singh",
//     age:12
// }

// about.call(user1,"guiter","Sonu");  
// about.apply(user1,['guiter', 'Ajay Singh'])                                       // apply also same as call bs seperate pass karne ke bajaye array mien pass karte hai

// // bind always return a functiion
// const func = about.bind(user1,"piano",'Aka')
// func();

// don't do this mistake
// const user={
//     firstName:"Aj",
//     age:8,
//    about:function(){
//     console.log(this.firstName, this.age);              
// }
// }
// // user.about()
// // const myFunc1= user.about;
// // console.log(myFunc1);                               // if we do this this will undefined because this key word is not find value for myFunc1
// const myFunc1= user.about.bind(user);
// console.log(myFunc1);

// arrow functions
// arrow functions ka this ni hota
// ye apne surrounding se this leta hai


// short syntex
// const user={
//         firstName:"Aj",
//         age:8,
//        about(){                                                                 // short syntex
//         console.log(this.firstName, this.age);              
//     }
//     }
// user.about()


// create function to create multiple objects
// const user = {
//     firstName: "Ajay",
//     lastName: 'Singh',
//     email: 'ajaysingh@gmail.com',
//     age: 12,
//     address: "H.No. , Colony, pincode, state",
//     about: function () {
//         return `${this.firstName} is ${this.age}} years`
//     },
//     is18: function () {
//         return this.age >= 18;
//     }
// }
// console.log(user);
// const aboutUser = user.about();
// console.log(aboutUser);
// fucntion (that function create object)
// 2.) add key value pair
//3.) object ko return karega
// function createUser(firstName, lastName, email, age, address) {
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = function () {
//         return `${this.firstName} is ${this.age} years old`
//     };
//     user.is18= function () {
//         return this.age >= 18;
//     }
//     return user;
// }
// const user1= createUser("ajay","singh","ajay@ajay.com",18,"my address");
// console.log(user1);
// const is18 =  user1.is18();
// const aboutUser = user1.about();
// console.log(is18);
// console.log(aboutUser);