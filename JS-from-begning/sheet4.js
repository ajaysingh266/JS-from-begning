// objects inside Array
// very useful in real world application

// const users = [
//     {
//         userId: 1,
//         firstName: "Ajay",
//         gender: "Male"
//     },
//     {
//         userId: 2,
//         firstName: "Singh",
//         gender: "Male"
//     },
//     {
//         userId: 3,
//         firstName: "Chaudhary",
//         gender: "Male"
//     },
// ]
// for(let user of users){
//     console.log(user);
//     console.log(user.userId);
// }
// console.log("users",users);


// const users = [
//     {
//         userId: 1,
//         firstName: "Ajay",
//         gender: "Male"
//     },
//     {
//         userId: 2,
//         firstName: "Singh",
//         gender: "Male"
//     },
//     {
//         userId: 3,
//         firstName: "Chaudhary",
//         gender: "Male"
//     },
// ]
// const [{firstName}, , {gender}] = users
// const [{firstName: user1firstName, userId}, , {gender:user3gender}] = users
// console.log(firstName, gender);
// console.log(user1firstName,userId);
// console.log(user3gender);


// FUNCTION 
// function kuch kaam karta hai
// function ko servent ki tarah samjho, jo humare liye kuch kaam karta hai
// ye kaafi agyakari hote hai, jo kaam bolo kar denge
// but hume function ko is tarah se banana hoga ki jo bol v kaam  kar de


// function singhHappy() {
//     console.log("happy birthday to you......");
// }
// singhHappy();

// function twoplusFour() {
//     return 2 + 4;
// }
// console.log(twoplusFour());
// twoplusFour();
// call, invoke and run are same for function

// with parameter value comes in last
// function sumTwoNumber(number1, number2){
//     return number1 + number2;
// }
// console.log(sumTwoNumber(52,7));

// isEven
// input : 1 number 
// output : true , false 
// function isEven(number){
//     if(number % 2===0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(isEven(4));
// shorcut method
// function isEven(number){
//     return  number % 2===0;     
// }
// console.log(isEven(9));

// function 
// input : string 
// output: firstCharacter 
// function firstChar(anyString){
//     return anyString[0];
// }
// console.log(firstChar("asd"));

// function arrayTarget(array, target){
//     for(let i=0; i<=array.length; i++){
//         if(array[i]===target){
//             return i;
//         }
//     }
//     return "false";
// }
// const myArray = [1,2,3,4,8,9,10,15]
// const ans = arrayTarget(myArray, 10);
// console.log(ans);



// function expression
// const singhHappyBirthday = function(){              //to change function declaration into function expression is put function in variable
//     console.log("happy ");                          // function without name is anonymous function
// }
// singhHappyBirthday();


// arrow functions
// const singhHappyBirthday = ()=>{
//     console.log("happy birthday");
// }
// singhHappyBirthday();

// for single parameter
// const isEven = number =>{
//     return number % 2 === 0;
// }

// in single line with one parameter
// const isEven = number => number % 2 === 0;
// console.log(isEven(8));


//Hoisting
// we can call funtion before function declare, this only happen in function declaration case only
// hello();
// function hello(){
//     console.log("hello world");
// }

// cannot access the funtion before declare. only access after function expression or arrow function
// hello();
// const hello = function(){                   // either we can put let or var in place of const
//     console.log("hello world");
// }

// console.log(hello);                  // log before declartion var will be undefined but let & const will create error
// var hello = "hello world";              
// console.log(hello);