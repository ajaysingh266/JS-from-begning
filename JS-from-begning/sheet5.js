// function inside function
// const app = () =>{
//     const myFunc = () =>{
//         console.log("hello from myFunc");
//         }

//         const addTwo =(num1, num2) =>{
//             return num1 + num2;
//         }
//         console.log(addTwo(2,3));

//         const mulFun = (num1, num2) => num1*num2;
//     console.log("inside app");
//     myFunc();
// }
// app();

//lexical scope
// lexical environment

// function myApp(){
// const myVar = "value1";
//     function myFunc(){
// const myVar = "value59";
//         const myFunc2 = () =>{
//             console.log("inside myFunc", myVar);
//         }
//         myFunc2();
//     }
//     console.log(myVar);
//     myFunc();
// }
// myApp();

// const myVar = "value again updated"            // then JS search myVar in global space
// function myApp() {
// const myVar = "value1";
//     function myFunc() {
// const myVar = "value Updated"
//         const myFunc2 = () => {
//             console.log("inside myFunc2", myVar);
//         }
//         myFunc2();
// first myVar search value inside the function if no found
//     }                                                   // then search in lexical environment i.e in uppar function for eg. current parent function myApp.
// if we comment myVar inside myFunc then JS search myVar variable in parent function.
//     const myFunc3 = () => { }
//     console.log(myVar);
//     myFunc();
// }
// myApp();

//block scope vs function scope
// let and const are block scope
// var is function scope

// {
//     let firstName = "Ajay"
//     console.log(firstName);
// }
// console.log(firstName);                         // first name cannot access outside the block, if we put console inside the block then it will show result

// {
//  let firstName = "Singh"
//  console.log(firstName);                        //both variable treat as differnet because both have different scope.
// }

// if(true){                                       // if condition block space
//     let firstName = "Ajay";
//     console.log(firstName);
// }
// console.log(firstName);                         // cannot acces const and let outside the block

// if(true){
//         var firstName = "Ajay";
//         console.log(firstName);                     //var can access on both inside block or outside block
//     }
//     console.log(firstName);

// function myApp(){
//     if(true){
//         let firstName = "Ajay";
//         console.log(firstName);
//     }
//     console.log(firstName);                         // myApp cannot access value of firstName because of block scope
// }
// myApp();


//default parameter

// function addTwo(a,b){
//     return a+b;
// }
// console.log(addTwo(4));                     // if we cannot provide second parameter then value will be NaN

// function addTwo(a,b){
//     if(typeof b ==="undefined"){                    // if b is not provide as a parameter then this condition will execute as default parameter
//         b=1;
//     }                                                // this condition is used in ES- 5
//     return a+b;
// }
// console.log(addTwo(4));

// function addTwo(a,b=0){
 // after ES - 6 default parameter
//     return a+b;
// }
// console.log(addTwo(4));

//rest parameter
// function myFunc(a, b, ...c) {                              // if we have 3 paramater
//     console.log(`a is ${a}`);
//     console.log(`a is ${b}`);
//     // console.log(`a is ${c}`);
//     console.log(`c is`, c);

// }
// myFunc(2,3,4,5,6,7,8,9)                                       // after 2 parameter all value inserted in third parameter as array after c use as spread array

// make a function that sum of all paramneter
// first log all number
// check Array.isArray() that it is true or not
// build a logic
// function addAll(...numbers){
//     let total = 0;
//     for(let number of numbers){
//         total= total+ number
//     }
//     return total;
// }
// const ans= addAll(4,5,13);
// console.log(ans);

//param destructuring
//only use with objects
// mostly use in React

// const person = {
//     firstName : "Ajay",
//     gender : "male",
// }
// function personDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
    //console.log(obj.age);                          // if object key in not available in object then it will be undefined
// }
// personDetails(person);

// function personDetails({firstName, gender}){
//     console.log(firstName);
//     console.log(gender);
// }
// personDetails(person);

// callback functions

// function myFunc(a){
//     console.log(a);
//     console.log("hello");
// }
// myFunc([1,2,3]);
// myFunc("abc");
// myFunc({name: "Ajay"});

// step 1 of call back function//
// function myFunc2(){
//     console.log("inside myFunc2");
// }
// function myFunc(a){
//     console.log(a);
//     // console.log("hello");
// }
// myFunc(myFunc2);

// step 2 of callback function//
// function myFunc2(){
//     console.log("inside myFunc2");
// }
// function myFunc(a){
//     a();
//     // console.log("hello");
// }
// myFunc(myFunc2);

//step 3 of callback//
// function myFunc2(){
//     console.log("again myFunc2");
// }
// function myFunc(callback){              // callback pass as a parameter i.e convention not necessary
//     console.log("hello after this callback execute");
//     callback();
// }
// myFunc(myFunc2);

// step 4 of callback function //
// function myFunc2(name){                         // pass some parameter
//     console.log("again myFunc2");
//     console.log(`your name is ${name}`);
// }
// function myFunc(callback){              // callback pass as a parameter i.e convention not necessary
//     console.log("hello after this callback execute");
//     callback("Ajay");                           // name parameter pass through callback
// }
// myFunc(myFunc2);

// function retuning function //

// function myFunc(){
//     function hello(){
//         // console.log("hello world");
//         return "hello new world"
//     }
//     return hello;
// }
// const ans = myFunc();
// // console.log(ans);
// console.log(ans());
// ans();

// alternate way of returning function
// function myFunc(){
//         return function(){
//             return "hello this is function"
//         }
// }
// const ans = myFunc();
// // console.log(ans);
// console.log(ans());
// ans();
