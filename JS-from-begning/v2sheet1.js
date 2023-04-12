// JS is synchronous programming language
// Single Thread

// sabse pehle JS ka code compile hota hai
// bhot si language mien interpreter hoga aur execute kar dega
// compilation//
// code excecute hone se pehle compile hota hai
// code excecute hone se pehle compiler humare saare code ko dekhta hai 
// compilation phase
// 1- tokenizing / lexing      -- chote chote tukdo mien code todna, chote chote gums ko token bolte hai
// 2- parsing       --- chote chote tukde samjh ke AST(abstract syntex tree) banta hai, jo executbale format mien banta hai
// 3- code generation --- jisko hum execute kar sakte hai

// ECMA documentation
// 1- Early Error checking hone chahiye
// 2- variable hai jitne unka appropirate scope kya hai
// ye dono step PARSING phase mien hote hai
// Deteminig Appropriate Scope for Variables point 2 ECMA 
// parse kyu hota hai code-- taki hume pata chal sake konsa variable kha belong karta hai, kis scope mien belong karta hai,
// kaha uske jagah hai, kaha hum usko access kar sakte hai, ye code ko execute karne se pehle hi decide ho jata hai
// vairable kitne hai ---  variable function mien hai kya? 


// console.log(this);
// console.log(window);
// console.log(firstName);
// // var firstName=."hi";                    // unxpected token

//  JS note karegi ki abi ek firstName hi variable hai
//  isko check kregi kya ye function mien hai kya
// jo JS ka code function mien nahi hota , vo global scope or global memory mien hota hai
// jo JS ka variable function mien nahi hota , vo global scope or global memory mien hota hai 
//  aur firstName naam ka variable global scope ko belong karta hai
// itni information JS ko apne code ko execute karne se pehle hi pata hoga
//  abi ye variable ni banega, js ke pas abi bs instruction hai
// kya instruction hai ki global scope mien ek firstName naam ka variable hai
// ye information js ke pas code ko execute karne se pehle hai, ye kaam hai compile ka

// 3 image folder mien hai, diagram ki


// code execution //
// code execution phase --- In JS code executes inside execution context
// code execute karne ke liye hume execution context create karna hoga
// sabse pehle jo execution create hota hai vo Global Execution Context
// 1- Global Execution Context 2 part mien banta hai
// a- Creation Phase or Global Environment Code
// b- Code Execution Phase   

// why compilation //
// how javascript code executes //
// what is global execution context //
// what is local execution context //
// closures

// main start
// console.log(this);
// // console.log(window);
// console.log(firsName);
// var firsName= "Ajay";
// console.log(firsName);

//What happens to function declaration?
// console.log(this);
// // console.log(window);
// console.log(myFunction);
// console.log(fullName);

// function myFunction(){
//     console.log("this is my function");
// }
// var firstName = "Ajay";
// var lastName = "Singh";
// var fullName = firstName+" "+ lastName;
// console.log(fullName);

// What is hoisting???
// function exprerssion
// console.log(myFunction);
// var myFunction = function (){
//     console.log("this is my function");
// }
// console.log(myFunction);

//ReferenceError: Cannot access 'firstName' before initialization
// ReferenceError: firstName is not defined 
// if let or const not defined
// console.log(firstName);
// let firstName = "Ajay";                         // incase of let & const, variables are uninitialized, so they throw error
// console.log(firstName);
// let n const ki bi hoisting hoti hai
// TDZ -- Temporal Dead Zone
// firstName starting mien uninitialized thi uske bad line execute hue to initialize hue
// firstName starting mien uninitialized  isko TDZ bolte hai


// function execution context//
// let foo = "foo";
// console.log(foo);
// function getFullName(firstName, lastName){
//     console.log(arguments);
//     // arguments are array like object[]{}
//     // means have index and length
//     let myVar = "var inside func";
//     console.log(myVar);
//     const fullName = firstName+" "+ lastName;
//     return fullName;
// }
// const personName = getFullName("Ajay", "Singh");
// console.log(personName); 


// lexical environment, scope chain//
 
// const lastName = "Singh";
// const printName = function(){
//     const firstName = "Ajay";
//     console.log(firstName);
//     console.log(lastName);
// }
// printName();
