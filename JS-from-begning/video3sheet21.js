//JS is synchronous programming & single threaded
// synchronous programming vs  asynchronous programming
// synchronous programming
// block event code
// if one loop is running than next line cannot execute


// setTimeout //
// console.log("script start");
// function hello(){
//     console.log("hello world");
// }
// setTimeout(hello, 1000);                        // first argument is function // & second argument kitne der baad ye fuction call krna hai
// console.log("script end");                         // setTime provided by webbrowser


// console.log("script start");
// setTimeout(()=>{
//     console.log("inside set timeout");
// }, 1000); 
// console.log("script end");

// console.log("script start");
// const id = setTimeout(() => {
//     console.log("inside setTimeout");
// }, 1000);
// for (let i = 0; i < 5; i++) {
//     console.log("inside for loop");
// }
// console.log("id",id);
// clearTimeout(id);
// console.log("script end"); 


// setInterval //
// console.log("script start");
// // setInterval(()=>{
// //     console.log(Math.random());
// // }, 1000)
// console.log("script end"); 

// callback//
// function myFunc(callback){
//     console.log("Function is doing something");
//     callback();
// }
// function myFunc2(){
//     console.log("Function is doing ");
// }
// myFunc(myFunc2);
//alternate way
// function myFunc(callback){
//     console.log("Function is doing something");
//     callback();
// }
// myFunc(function(){
//     console.log("Function is doing "); 
// })
// alternate way with arrow function
// function myFunc(callback){
//     console.log("Function is doing something");
//     callback();
// }
// myFunc(()=>{
//     console.log("Function is doing good"); 
// });

// function getTwoNumbers(num1, num2, onSuccess, onFailure) {
//     if (typeof num1 === "number" && typeof num2 === "number") {
//         onSuccess(num1, num2);
//     }
//     else{
//         onFailure();
//     }
// }
// getTwoNumbers(4, 5, (n1,n2)=>{
//     console.log(n1+n2);
// }, ()=>{
//     console.log("pass only number");
// })