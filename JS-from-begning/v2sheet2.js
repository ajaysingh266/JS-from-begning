// clousers
// clousers :30-40%
// analyse : 70-80%
// real example :100%

// function return function
// function outerFunction(){
//     function innerFunction(){
//         console.log("hello world");
//     }
//     return innerFunction;
// }
// const ans = outerFunction();
// console.log(ans);
// ans();
// console.log(ans());

// function printFullName(firstName, lastName){
//     function printName(){
//         console.log(firstName, lastName);
//     }
//     return printName;
// }
// const ans = printFullName("Ajay", "Singh");
// console.log(ans);
// ans();

// jab bi hum kisi function ko return karenge kis aur function se for eg printName naam ke function ko return kar rhe hai
// kha se return kar rhe hai, printFullName name ke function mien se
// printName function jb return hoga to khali hath return ni hoga, local memory vale variables ko sath leke return hoga
//  printName function apne sath firstName n LastName name ko leke return hoga

// next example //
// function hello(x){
//     const a = "varA";
//     const b = "varB";
//     return function(){
//         console.log(a,b,x);
//     }
// }
// const ans = hello("arg");
// // console.log(ans);
// ans();

// function myFunction(power){
//     return function(number){
//         console.log(number ** power); 
//     }
// }
// const cube = myFunction(3);
// // cube(2);
// const ans = cube(3);
// console.log(ans);