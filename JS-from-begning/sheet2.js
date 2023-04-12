// arrays : ordered collection of items or elements
// ordered means it has index
// let fruits = ["apple", "mango", "grapes"];
// let numbers = [1,2,3,4,5];
// console.log(fruits);
// console.log(fruits[0]); 
// console.log(numbers);
// console.log(numbers[3]);

// let fruits = ["apple", "mango", "grapes"];                  // typeof of array is object
// console.log(fruits);
// fruits[1] = "banana"                     // it updates banana in place of mango at given index.
// console.log(fruits);
// console.log(typeof fruits);
// console.log(Array.isArray(fruits));                         // to check given array is array or not

// let fruits = ["apple", "mango", "grapes"];                   //push always add in last of array & also change array
// console.log(fruits);                                         // array are mutables
// fruits.push("banana");
// console.log(fruits);
// //pop removes last elements
// fruits.pop();     
// let popfruit=  fruits.pop();                                   // it also provide removed element in different variable
// console.log(fruits.pop());
// console.log(fruits);
// console.log("pop",popfruit);

//shift
// let fruits = ["apple", "mango", "grapes"];  
// fruits.shift();                                          // shift also provide removed elements in different variable
// let removedFruit = fruits.shift();
// console.log(fruits);
// console.log(removedFruit);


//primitive vs reference type data type
// let num1 =6;
// let num2 = num1;
// console.log("value of num1",num1 );
// console.log("value of num2",num2 );
// num1++;                                                      //primitive data type store in stack. all variable have their diffent place.
// console.log("after increment");                              // so if we chgange num1 value then num 2 value does not update.
// console.log("increased value of num1",num1 );
// console.log("increased value of num2",num2 );

//reference data type
// let array1 = ["item1", "item2"];
// let array2 = array1;
// console.log("array1", array1);
// console.log("array2", array2);                               // reference data type also stores in stack but have address of heap where array  
// array1.push("item3", "item4");                                  // stores or update. both variable update their value at the time of rendering with 
// console.log("item added array1", array1);                       // the help of address.
// console.log("item added array2", array2);

//how to clone array
// let array1= ["item1", "item2"];
// let array2= array1;                              // assigned to new variable
// console.log(array1===array2);           // ans true
// if we clone 
// let array1= ["item1", "item2"];
// let array2= ["item1", "item2"];
// console.log(array1===array2);               // ans false
// console.log(typeof array1);
// console.log(typeof array2);
// let array2 = array1.slice(0);                        // assigned to new variable
// console.log(array1 , array2);
// console.log(array1===array2); 
// // array1.push("item3");
// // console.log(array1 , array2);
// let array2 = [].concat(array1);                 // concat the blank array to array1
// let array2 = array1.slice(0).concat(["item3" , "item4"])                // to clone a array to new array and also add new items
// console.log(array2);


// new way to clone spread operater
// let array1= ["item1", "item2"];
// let array2 = [...array1]
// let array2 = [...array1, "item", "item3", "item4"]
// let oneArray = ["item5", "item6"]
// let array2 = [...array1, "item", "item3", "item4", ...oneArray]                 // concat to array via spread operator
// console.log(array2);  
// console.log(array2, array1);



// for loop in array
// let fruits = ["apple", "banana", "mango", "grapes"];
// let array2 = []
// for(let i=0; i<=fruits.length-1; i++){
    // console.log(fruits[i]);
    // array2.push(fruits[i].toUpperCase());
    // console.log(fruits[i].toUpperCase());
// }
// console.log(array2);

// for of loop in array
// const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
// const fruits2 = [];

// for(let fruit of fruits){
//     fruits2.push(fruit.toUpperCase());
// }
// console.log(fruits2);

// for(let i = 0; i<fruits.length; i++){
//     console.log(fruits[i]);
// }

// for in loop in array
// const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
// const fruits2 = [];

// for(let index in fruits){
//     fruits2.push(fruits[index].toUpperCase());
// }
// console.log(fruits2);

// array destructuring
// const  myArray = ["value1", "value2", "value3", "value4", "value5"]
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);
// let [myVar1,myVar2] = myArray;                      //for 2 variables destructuring
// let [myVar1, myVar2, ...newArray] = myArray;            // if you want to assign remaining all values in one var
// console.log(myVar1, myVar2, newArray);                             // if there are 3 values & you want 3rd valur in 2nd var then skip middle index by comma(,).

// var x=3;
// console.log(x);
// console.log(typeof x);

// let car = ""; 
// console.log("value of ",car);
// console.log(typeof car);