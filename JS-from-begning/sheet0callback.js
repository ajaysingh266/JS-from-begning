// step 1
//   function myFunc(a){
//     console.log(a);
// console.log("hello");
//   }
//   myFunc([1,2])
// myFunc("asdc")
// myFunc({name:"ajay"})
// myFunc()

// step 2
//   function myFunc(a){
//     console.log(a);
// console.log("hello");
//   }
//   function myFunc2(){
//     console.log("inside function");
//   }
// myFunc(myFunc2)
// myFunc mien hum myFunc2 as a input accept karke usko call kar sakte hai
// isko hi callback function bolte hai

// step 3
// function myFunc(a){
//    a();
//   }
//   function myFunc2(){
//     console.log("inside function");
//   }
// myFunc(myFunc2)

// step4 convention
// function myFunc2(){
//     console.log("inside my func2");
// }
// function myFunc(callback){
//     console.log("hello there dfgdjf");
//     callback();
// }
// myFunc(myFunc2);

// step5
// function myFunc2(name){
//     console.log("inside my func2");
//     console.log(`my name is ${name}`);
// }
// function myFunc(callback){
//     console.log("hello there this is main function");
//     callback("ajay");
// }
// myFunc(myFunc2);