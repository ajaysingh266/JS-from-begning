//  Q.1
// function fruit(){
//     console.log(name);
//     console.log(price);

//     var name ="apple";
//     let price = 20;
// }
// fruit();
//  o/p-> undefined & error
// reason is hoisting. in var case it is applicable thatswhy it will be undefined.
//  in case of literal and const hoisting will not be applied.

// Q.2
// for(var i=0; i<3;i++) {
// setTimeout(()=>console.log(i), 1)
// }
// o/p-> 3 time 3 (3,3,3)
// var i have global scope in var case so befor settimeout function start loop already eneded with value 3.

// Q.3
// for(let i=0; i<3;i++) {
//     setTimeout(()=>console.log(i), 1)
//     }
// o/p -> 0 1 2
//  let doesnot have global scope. it only have block scope, it will run just only in this block

// Q4.
// console.log(+true);
// console.log(typeof +true);
// o/p-> 1 & number
//  because +true bcome number, and true have value 1 as number

// Q5.
// console.log(!"ajay");
// console.log(typeof ("aajay"));
// o/p-> false & string
// opposite value of string is false & type of string is string
// if we want to convert in to true then add !! e.g console.log(!!"ajay");

// Q6.
// let data = "size";
// const bird={
//     size:"small"
// };
// console.log(bird[data]);
// console.log(bird["size"]);
// console.log(bird.size);
// console.log(bird.data);

// o/p-> small,small,small,undefined
//  if we pass dynamic key as variable to an object it will behave as key to access value

// Q7.
// let c={name:"peter"};
// let d;
// d=c;
// c.name="sam";
// console.log(d.name);
// o/p-> peter
// whenever we are using object and array, it will save with reference type.

// Q8.
// var x;
// var x= 10;
// console.log(x);
// o/p-> 10

// Q9.
// var x;
// let x=10;
// console.log(x);
// o/p-> syntax error, because x is already declared

// Q10.
// let a=3;
// let b= new Number(3);
// console.log(a==b);
// console.log(a===b);
// o/p -> true & false
// datatype of b is object thats why it is false

// Q11.
// let name;
// nmae={};    //Typo! mis spell there
// console.log(name);
// o/p-> undefined
// because name is declared but value is not assigned. no difference from typo!

// Q12.
// function fruit(){
//     console.log("woof!");
// }
// fruit.name="apple";
// fruit();
// o/p-> woof!

// Q13.
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(1,"2"));
// o/p->12
// number and string concatenation

// Q14.
// let number = 0;
// console.log(number++);
// console.log(++number);
// console.log(number);
// o/p-> 0, 2, 2

// Q15.
// function getAge(...args) {
// if we log consol.log(args), we will get array thatswhy type of args is object
//     console.log(typeof args);
// }
// getAge(21);
// o/p-> object

// Q16.
// function getAge(){
//     'use strict';
//     age = 21;
//     console.log(age);
// }
// getAge();
// o/p-> uncaught ReferenceError: age is not defined
// if we put strict mode then hoisting will not work

// Q17.
// const sum = eval('10*10+5');
// console.log(sum);
//  eval performs operation of its parameters
// eval make them numeric values and o/p-> 105

// Q18.
// **How long is cool_secret accessible?
// sessionStorage.setItem('cool_secret',123);
// ans-> sessionStorage automatically removes when we close the tab or browser

// Q19.
// const obj={1:"a",2:"b",3:"c"}
// console.log(obj.hasOwnProperty("1"));
// console.log(obj.hasOwnProperty(1));
// ans-> true and true
// beacuse key is always a string, to it can be acessable, if we have any of numeric value then it can be access by both ways

// Q20.
// const obj = {a:"one", b:"two", a:"repeat"};
// console.log(obj);
// o/p-> {a:"repeat", b:"two} because second value of a override first value of a

// Q21.
// for(let i=1;i<5;i++){
// if(i===3) continue;
// console.log(i);
// }
// o/p-> 1,2,4

// Q22.
// const foo=()=> console.log("First");
// const bar =()=> setTimeout(()=> console.log("Second"));
// const baz =()=> console.log("third");
// bar();
// foo();
// baz();
// o/p-> First, third, second

// Q23.

{
  /* <div onClick={console.log("first div")}>
<div onClick={console.log("second div")}>
    <button onClick={console.log("button")}>
        click
    </button>
    </div>
</div> */
}
// o/p ->button, second div, first div beacause of bubbling events(inside to outside)

// Q24.
// const person={name:"lydia"};
// function sayHi(age){
//     return `${this.name} is ${age}`;
// }
// console.log(sayHi.call(person, 21));
// console.log(sayHi.bind(person, 21));
// o/p ->lydia age is 21 & bind will return a fucntion
// because when we are using bind then agai we have to call it like console.log(sayHi.bind(person, 21)())

// Q25.
// function sayHi(){
//     return (()=>0)();
// }
// console.log(typeof sayHi());
//  o/p-> number
// arrow function will return 0 thatswhy type of sayHi function is number

// Q26.
// function sayHi(){
//     return ()=>0;
// }
// console.log(typeof sayHi());
// o/p -> function
//  it will return arrow function ()=>0. which is not called thatswhy it will return function

// Q27.
// console.log(typeof typeof 1);
// o/p -> string

// Q28.
// const number= [1,2,3];
// number[9] = 11;
// console.log(number);
// o/p -> [1,2,3,empty*6,11]

// Q29.
// const numbers = [1,2,3];
// numbers[3]  = numbers;
// console.log(numbers);
// o/p -> [1,2,3,infinite array of [1,2,3]]
// because we assign same array to 3 index of array, it make a loop, then again assign a array to 3 index of array

// Q30.
// console.log(!!null);
// console.log(!!"");
// console.log(!!1);
// o/p-> false, false, true

// Q31.
// console.log(setInterval(()=>console.log("hi"),1000));
// console.log(setInterval(()=>console.log("hii"),1000));
// console.log(setInterval(()=>console.log("helo"),1000));
// o/p -> 1,2,3,hi, hii, hello
// 1,2,3 are the id of setinterval, sometime we must have to stop them, if we want to remove 2nd setInterval.
//  then we remove with the help of id. every time setInterval return unique id

// Q32.
// console.log([..."ajay"]);
// o/p -> ["a", "j", "a", "y"]
// it will make in separate separate sting of array

// Q33.
// let data = 3 + 4 + "5";
// console.log(typeof data);
// o/p -> string

// Q34.
// console.log(3 + 4 + "5");
// console.log(typeof 3 + 4 + "5");
// console.log(typeof (3 + 4 + +"5"));

// o/p ->75 & number45 & number

// Q35.
// let data =[1,2,3].map(num=>{
//     if(typeof num === "number") return;
//     return num*2;
// })
// console.log(data);
// o/p-> [undefined, undefined, undefined]

// Q36.
// function getInfo(member){
//     member.name = "Anil";

// }
// const person = {name:"sarah"};
// getInfo(person);
// console.log(person);
// o/p-> {name:"anil"};
// we change the value of name inside the function.

// Q37.
// (() => {
//   let x = (y = 10);
// })();
// console.log(typeof x);
// o/p-> undefined
// x have block scope thatswhy we dont call

// Q38.
// (() => {
//       let x = (y = 10);
//     })();
//     console.log(typeof y);
// o/p-> number
// we dont put any declaring keyword. so it behaves var key word automatically. 

// Q39.
(() => {
    let x=10;
})();

(() => {
    let x=10;
})();
console.log(typeof x);