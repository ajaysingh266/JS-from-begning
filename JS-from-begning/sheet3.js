//Objects
//arrays are good nut not sufficient
// for real world data 
// object stores key value pairs
// objects don't have index

// how to create object
// const person= {name:"Ajay", age:25 }                  // name is key & Ajay or any string is value
// console.log(person);                                  // key is always in string or by default string
// console.log(typeof person);

// // how to access data from objects
// console.log(person.name);                                // dot notation
// console.log(person.age);


// array store in object
// const person = {                            // we also called key as a property
//     name: "Ajay",
//     age: "25",
//     hobbies: ["playing volleyball", "sleeping", "listening music"]
// }

// console.log(person);                         // dot notation
// console.log(person.hobbies);
// how to add key value pair to obejct
// person.gen = "male"                                    // single value push as it is
// person.gender = ["male", "female"]                   //if value have more than one then we add as a array 
// console.log(person);
// person["gender"] = "male"                               // also add key value pair, as key add in array bracket
// console.log(person); 
// console.log(person["name"]);            //(bracket notation) to access key or property direct. array bracket and string name with quotes 



// difference between dot notation and bracket notation
// const key = "email";
// const person ={
//     name: "Ajay",
//     age: "25",
//     "person hobbies": ["playing volleyball", "sleeping", "listening music"]                 // if space in key than always put in quotes
// }

// console.log(person.person hobbies);          // cannot access the value directely by dot notation in this type of key
// console.log(person["person hobbies"]);             // access only by bracket notation
// person["key"] = "ajaysingh266@gmail.com"             // cannot pass key as string for pick a email key
// person[key] = "ajaysingh266@gmail.com"                  // pass key as a variable
// console.log(person);


// how to iterate object
// two type for object iterate 
// for in loop
// object.keys
// const person = {
//     name: "Ajay",
//     age: "25",
//     "person hobbies": ["playing volleyball", "sleeping", "listening music"]                 // if space in key than always put in quotes
// }
// for (let key in person) {
    // console.log(key);                       // only get key of person not get values
    // console.log(person[key]);                   // only get value of person
//     console.log(`${key}: ${person[key]}`);        // for getting both key and value pair
//     console.log(key, " : ", person[key]);
// }

// if direct console object.key(person) then it comes in array
// console.log(Object.keys(person));
// console.log(typeof (Object.keys(person)));



// computed properties
// const key1 = "objkey1";
// const key2 = "objkey2";

// const value1 = "valuekey1";
// const value2 = "valuekey2";

// const obj = {
//    [key1]: value1,                      // computed properties to access
//     [key2] : value2
// }

// second method
// const obj = {}
// obj[key1]= value1;
// obj[key2] = value2

// console.log(obj);



//Spread operator in object (main topic)
// spread operator rivision for array
// const array1 = [1,2,3];
// const array2 = [4,5,6];
// const newArray =[...array1, ...array2, 69, 89];
// const newArray = [..."12345678"]            //pass as string. integer does not spread
// console.log(newArray);

//Spread operator in object (main topic)
// const obj1={
//     key1: "value1",
//     key2: "value2",
//     key1: 50                                // second value override 1st value
// }

// const obj2={
//     key3: "value3",
//     key4: "value4",
// }
// const newObj = {...obj1, ...obj2, key10:"value10"}              // new also add with this spread operator
// const newObj = {..."abc"}                   // this syntex automatic make key value pair with key 0, 1, 2
// const newObject  = {...["item1", "item2"]}              // this method is used for array but rearly used
// console.log(obj1);
// console.log(newObject);


// object destructuring
// const band = {
//     bandName: "led zepplin",
//     famousSong: "stairway to heaven",
//     year: 1968,
//     anotherFamousSong: "kashmir",
//   };
  
//   let { bandName, famousSong, ...restProps } = band;
//   console.log(bandName);
//   console.log(restProps);