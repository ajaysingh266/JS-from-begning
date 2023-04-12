// extension live server
// <script src="flie.js"></script>

// console.log("hello world"); //log only
// string collection of characters
// iske baad aate comments jo hum ni chahte excute ho
// for example console.log can print something on console

// intro to variables
// variales can store information, we can use that information later, or we can change that information later
// var first_Name= "Ajay"   // value is assigned to first_Name
//  var is a keyword, jo programming language mien pehle se define hote hai unko keywords bolte hai
// console.log(first_Name);

//  rules for naming variables
//  cannot start with number
// can use only underscore _ or dollar $ symbol
// cannot use spaces
// convention
// start with small leeter and use camelCase
//  for example- var first_name="Ajay";             // snake case writing
//  for example- var firstName="Ajay";             // camel case writing

// var firstName= "Ajay"    // value is assigned to firstName
// firstName = "Singh"       // value is updated in firstName
// console.log(firstName);

// var secondName= "Ajay123"  // value is assigned to secondName
// var secondName= "Singh132"   // again  value is assigned to secondName
// console.log(secondName);

// let keyword
// let fName = "ajay"      // value is assigned to fName  & let is not declared again as var is declared
//  fName = "singh"           // it is only updated after assigned value

// let inter = 10;
// console.log(inter**2);      // 2 ** for power
//  for square root (** 0.5)

// const pi=3.14;              //const is constant, never change the value of const

// string indexing
// let firstName = "Ajay";
//  console.log(firstName[0]);       // log for zero index no.

// length of string
// console.log(firstName.length);        // find length of string
//  if we add space in string that will also count

// last index : length -1
// console.log(firstName[firstName.length-2]);      // find last index or second last index of string

// trim()
// let firstName= "  Ajay   ";                  // remove space from string
// console.log(firstName.length);               // exsistig string is immutable hai, isliye new variable mien store karna hoga
// let newSting = firstName.trim();              // trim provide new string     //"Ajay" & // assigned to new variable
// console.log(newSting);
// console.log(newSting.length);

// //toUpperCase()
// let firstName = "ajay";
// // console.log(firstName.toUpperCase());
// firstName= firstName.toUpperCase();                  // assigned to new variable
// console.log(firstName);

// to LowerCase same as above to UpperCase

//slice()
//start index
// end index        // ye end index tak jayega but include ni krega
// let firstName = "Ajaysingh"
// // let newSting =  firstName.slice(0,5)        //Ajays           // assigned to new variable
// let newSting =  firstName.slice(2)        //aysingh              // assigned to new variable // 2 index se start hoke last tak jayegi
// console.log(newSting);

// typeof operator
// data types (primitive data types)
// string "2sf"
//  number 1,2,3
// booleans
// undefined
// null
// BigInt
// symbol

// number to string
// let age =22;
// // console.log(typeof age);         // number
// // console.log(typeof (age + " "));   // number ko string mien convert karne ke liye bs empty string add kar do
// age = age + " ";                             //updated variable
// console.log(typeof (age));

// alternate way
// age = String(age);

// string to number
// let mystrng = "34"
// mystrng = +"34"           // string ko number mien change karne ke liye pehle + lga do
// console.log(typeof mystrng);

// alternate way
// mystrnf = Number(mystrng);

// string conactination

// //  tempelate string
// let age = 25
// let firstName = "Ajay"
// // "my name is Ajay & my age is 25"
// // let aboutMe= "my name is " + firstName + " &  my age is " + age
// let aboutMe = `my name is ${firstName} & my age is ${age}`
// console.log(aboutMe);

// undefined
//  jab aap variable ko bna doge but usme koi value assign ni kroge(valid only for var and let)
//  but const ke sath assign krne padega kuch na kuch ni to error dega

// null
//  ka means kuch ni
//  js mien ye ek bug hai

// BigInt
// let myNumber = 123;
// console.log(myNumber);
// console.log(Number.MAX_SAFE_INTEGER);      // to check maximum number store in javascript i.e 9007199254740991
// let myNumber = BigInt(90053445234523452345343453532543);  // to use BigInt before number for
// let sameNumber = 123n            // 'n' also works as BigInt
// console.log(sameNumber + myNumber);              // if we not use n in sameNumber, these number cannot add due to its data type

// if else condition
// let age = 16;
// if (age>=18){
//     console.log("user is adult");
// }
// else {
//     console.log("user is student");
// }

// let num = 15;
// if (num%2 === 0){
//     console.log("even");
// }
// else{
//     console.log("odd");
// }

// falsy values

// false
// null
// undefined
// " "
// 0

// let firstName = null;
// if (firstName){
//     console.log(firstName);
// }
// else{
//     console.log("fisrtName is empty");
// }
// in falsy case always execute else condition


//while loop
//printing 0 to 9
// dry--> don't repeat yourself
// let i=0;                                 // initialize
// while(i<=9){                             // condition
// console.log(i);                          // return
// i++                                      // increament
// }
// console.log(`current value of i ${i}`);
// console.log("hello");

// let num =10;
// let total =0;
// let i= 0;
// while (i<=100){
//     total = total+i;
//     i++;
// }
// console.log(total);
// other method
//  total = (num*(num+1))/2;
//  console.log(total);

// intro to for loop 
// print 0 to 9

// for(let i = 0;i<=9;i++){
//     console.log(i);
// }

// console.log("value of i is ",i);

// break keywork

// continue keyword 

// for(let i = 1; i<=10; i++){
//     if(i===4){
//         break;
//     }
//     console.log(i);
// }

// for(let i = 1; i<=10; i++){
//     if(i===4){
//         continue;
//     }
//     console.log(i);
// }
// console.log("hello there");


//dowhile loop
// let i=10;
// do{
//     console.log(i);             // kaam kya karna hai
//     i++;
// }
// while(i<=9)                           // ye kaam mujhe kab tak karna hai

// ternary operator / conditional operator
// let age =3;
// let drink = age>=5 ? "coffee" : "milk";
// console.log(drink);

// and or operator
// let firstName = "ajay";
// let age = 25;

// if(firstName[0]==="a"){
//     console.log("your name starts with a ");
// }
// if(age>18){
//     console.log("u are above 18");
// }

// if(firstName[0]==="a" && age>18){
//     console.log("xyz");
// }else{
//     console.log("abc");
// }

// nested if else

// winning number 19

// 19 your guess is right
// 17 too low
// 20 too high

// let winningNumber = 19;
// let userGuess = +prompt("Guess a number");

// if (userGuess === winningNumber) {
//   console.log("Your guess is right!!");
// } else {
//   if (userGuess < winningNumber) {
//     console.log("too low !!!");
//   } else {
//     console.log("too high !!!");
//   }
// }


// if 
// else if 
// else if 
// else if 
// else 

// let tempInDegree = 50;


// if(tempInDegree < 0){
//     console.log("extremely cold outside");
// }else if(tempInDegree < 16){
//     console.log("It is cold outside");
// }else if(tempInDegree < 25){
//     console.log("wheather is okay ");
// }else if(tempInDegree < 35){
//     console.log("lets go for swim");
// }else if(tempInDegree < 45){
//     console.log("turn on AC");
// }else{
//     console.log("too hot!!");
// }

// console.log("hello");
// let tempInDegree = 4;

// if(tempInDegree > 40){
//     console.log("too hot");
// }else if(tempInDegree > 30){
//     console.log("lets go for swim");
// }else if(tempInDegree > 20){
//     console.log("weather is cool");
// }else if(tempInDegree > 10){
//     console.log("it is very cold outside");
// }else{
//     console.log("extremely cold");
// }

// console.log("hello");



// switch statement 

// let day = 7; 

// if(day === 0){
//     console.log("Sunday");
// }else if(day ===1){
//     console.log("Monday");
// }else if(day ===2){
//     console.log("Tuesday");
// }else if(day ===3){
//     console.log("Wednesday");
// }else if(day ===4){
//     console.log("Thrusday");
// }else if(day ===5){
//     console.log("Friday");
// }else if(day ===6){
//     console.log("Saturday");
// }else{
//     console.log("Invalid Day");
// }

// let day = 9;

// switch(day){
//     case 0:
//         console.log("Sunday");
//         break; 
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thrusday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Invalid Day");
// }
