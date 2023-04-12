//iterables
// jispe hum for of loop laga sake
// string , array are iterables

// const firstName = "AjaySingh";
// for(let char of firstName){
//     console.log(char);
// }

// const items = ["item1", "item2", "item3"];
// for(let item of items){
//     console.log(item);
// }

// const users = {key1:"value1", key2:"value2"}             // objects are not iterable
// for(let user of users){
//     console.log(user);
// }



// array like objects
// jinke pas length property hoti hai
// aur jisko hum index se access kar sakte hai
// example - string

// const firstName = "AjaySingh"
// console.log(firstName.length);
// console.log(firstName[3]);


// Sets(it is iterable)//
//store data
// sets also have its own methods
// No index-based access
// order is not guaranted
// unique items only(no duplicates allowed)
// it stores linear order data like array 
  
// const numbers = new Set([1,2,3,4,3]);                      // syntext to make set
// const numbers = new Set(["a","abc","ab","ab","abc"]);
// console.log(numbers);                          
//  console.log(numbers[2]);                               // No index-based access
// const items= ["item1","item2","item3"] 
// const numbers = new Set();
//  numbers.add(2);                                    // never take multiple number simultaniously
//  numbers.add([2,3,4,5,6,7]);                           // take complete array 
//  numbers.add(items)                                 // add complete array 
//  if(numbers.has(1)){
//     console.log("1 exist")
//  }                                      // to check whether element exist or not in Set
//  else{
//     console.log(" does not exist");
//  }
//  console.log(numbers);
// const myArray = [1,2,3,4,4,6,5,6];
// const uniqueElements = new Set(myArray);                    // extract unique elements from Array
// console.log(uniqueElements);
// console.log(myArray);
// let length = 0;
// for( char of uniqueElements){                               // for finding length of sets
//     length++
// }
// console.log(length);


//Maps
// map is iterable

// store data in ordered fashion
// store key value pair(like object)\
// duplicate keys are not allowed like objects

// differnece between maps and objects

// objects can only have string or symbol
// as key

// in maps you can use anything as key
// like array, number, string

// Object literal
// key ---> always in string
// key ---> or in symbol
// const person ={
//     firstName:"Ajay",                           // this object is also called object literal
//     age:22,
//     1:"one"
// }
// console.log(person.firstName);
// console.log(person["firstName"]);
// for(let key in person){
//     // console.log(key);
//     console.log(typeof key);
// }

// const person= new Map();
// person.set('firstName', 'Ajay');
// person.set('age', 7);
// person.set(1, 'viii');
// person.set([1,2,3], 'onetwothree');
// person.set({1:'one'}, 'onetwothree');

// console.log(person);
// console.log(person.get('age'));                 // to get value of individual key
// console.log(person.keys());                       // to get all keys   & ans will get map iterator means we can run loop
// for(let key of person.keys()){
//     console.log(key, typeof key);
// }
// for(let key of person){
//     console.log(key, typeof key);
//     console.log(Array.isArray(key));
// }

// for(let [key, value] of person){                                 // destructuring array to get value
//     console.log(key, value);
// }
// const person1={
//     id:1,
//     firstName:'Ajay'
// }
// // if we want to add further information in other place then we use map method.
// const userInfo= new Map();
// userInfo.set(person1,{age:20, gender:'male'});
// // console.log(person1.id);
// console.log(userInfo.get(person1).gender);


// const person = new Map([['firstname','Ajay'],['age',10]])
// console.log(person);




// clone using Object.assign
//memory 

// const obj = {
//     key1:"value1",
//     key2:"Value2"
// }
// const obj2 = obj;                                //obj2 clone obj wiht address due to which both object will update
// const obj2 = {...obj};                              //if we want to clone the obj without updated value, to save at different address then save with spread function
// const obj2 = Object.assign({}, obj)
// obj.key3= "value3"
// console.log(obj);
// console.log(obj2);




// optional chaining
// const user = {
//     firstName:"Ajay",
//     // address: {houseNumber:'123'}
// }
// console.log(user?.firstName);                                               
// console.log(user?.address?.houseNumber);                                  // quetionmark dot will not provide error.it will give undefined if value not found
