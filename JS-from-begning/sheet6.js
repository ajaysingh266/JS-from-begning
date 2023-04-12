// important array method //
// for each, map, reduce, filter

// const numbers = [4,2,5,8];

// function mulitiplyBy2(number, index){
    // console.log("index is ", index);
    // console.log("final number",  number*2);
//     console.log(`${number}*2 = ${number*2}`);
//     console.log(`index is ${index} number is ${number*2}`);

// }
// mulitiplyBy2(numbers[3], 3);
// mulitiplyBy2(numbers[0], 0);
// for (leti=0; i<numbers.length; i++){
// mulitiplyBy2(numbers[i], i)
// }


// numbers.forEach(mulitiplyBy2)                       // for each method takes input a callback function

//alternate way forEach method//
// numbers.forEach(function(number, index){                // make anonymus fuction
//     console.log(`index is ${index} number is ${number*2}`);
// })

// next example

// const users = [
//     {firstName: "Ajay", age: "25"},
//     {firstName: "sachin", age: "30"},
//     {firstName: "Ankush", age: "32"},
//     {firstName: "Ch. sahab", age: "23"}
// ]
// users.forEach(function(user){                           // yahi callback function defines
//     console.log(`First Name is ${user.firstName}`);
// })
// users.forEach((user, index)=>{                       //with arrow function
//     console.log(`First Name is ${user.firstName} & index ${index}`);
// })

// alternate forof loop
// for(let user of users){
//     console.log(user.firstName);
// }


//map method

// map function always return new array & it always return something
// const numbers = [3,4,6,1,8];

// const square = function(number){
//     return number*number;
// }

// const squareNumber = numbers.map((number, index)=>{
//     return index;
// });
// console.log(squareNumber);


// const users = [
//     {firstName: "Ajay", age: "25"},
//     {firstName: "sachin", age: "30"},
//     {firstName: "Ankush", age: "32"},
//     {firstName: "Ch. sahab", age: "23"}
// ]
// const newName = users.map((user)=>{
//     return user.firstName;
// })
// console.log(newName);

// filter method //
// const numbers = [1,4,3,6,8,5,9,12]
// const isEven = function(number){                     //filter callback function always return boolean value only
//     return number%2===0;
// }
// const evenNum = numbers.filter(isEven);
// console.log(evenNum);

// const evenNum = numbers.filter((number)=>{
//     return number%2===0;
// });
// console.log(evenNum);
// var first = [ 1, 2, 3 ];
// var second = [ 2, 3, 4, 5 ];

// var common = first.filter(x => second.indexOf(x) !== -1)
// console.log("The common elements are: " + common);



//reduce method//
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulator, currentValue) => {
// return accumulator+ currentValue;
// });
// console.log(sum);
// accumulator          currentValue            return
//      1                      2                    3
//      3                       3                   6
//      6                       4                   10
//      10                      5                   15 

//next example
// const useCart = [
//     { productId: 1, productName: 'mobile', price: 10000 },
//     { productId: 2, productName: 'laptop', price: 20000 },
//     { productId: 3, productName: 'tv', price: 15000 }

// ]

// const sum = useCart.reduce((accumulator, currentValue)=>{
//     return  accumulator + currentValue.price;

// }, 0);                                           // for accumulator provide zero as initial value otherwise it automatic takes first value of array
// console.log(sum);
// const totalAmount = useCart.reduce((totalPrice, currentProduct) => {
//     return totalPrice + currentProduct.price;
// }, 0);
// console.log(totalAmount);


// sort method//
// const numbers = [5,9,1200,390,500,1000]                 // sort method changes the original array(mutate)
// numbers.sort();          // Acc to this, JS simply sort method treat it as string not a number, so it sort in incorrect manner
// console.log(numbers);      // to sort string we use ASCII code    
// const userNames = ["harshir", "ABD", "Harh" ,'abcd', "ajay",'mohan', 'sachin']
// userNames.sort();                   // ASCII code capital letter is samll start from 65 & small letter ASCII code is greater than capital letter it start from 97
// console.log(userNames);
// numbers.sort((a,b)=>{
//     return a-b;
// });
// shorcut//
// numbers.sort((a,b)=>a-b );              // this is for ascending order only. for descending order return(b-a)
// console.log(numbers);
// a-b ---> positive(grater than 0)
// if a-b is positive than place b before a(b,a)
// if a-b is negatibe than place a first than b(a,b)

//price Low to High or High to Low
// const product = [
//     { productId: 1, productName: "p1", price: 300 },
//     { productId: 2, productName: "p2", price: 3000 },
//     { productId: 3, productName: "p3", price: 30 },
//     { productId: 4, productName: "p4", price: 5000 },
//     { productId: 5, productName: "p5", price: 500 }
//  ];
//  product.sort((a,b)=>{                  // this will change object postion also
//    return a.price-b.price
//  })
//  console.log(product);

// const lowToHigh = product.slice(0).sort((a,b)=>{
//         return a.price-b.price;
// })
// console.log(lowToHigh);
// console.log(product);
//HightoLow
// const HightoLow = product.slice(0).sort((a,b)=>{
//     return b.price-a.price;
// })
// console.log(HightoLow);
// console.log(product);

// find method //
// const myArray = ["hello", "cat", "dog", "lion"];            // to find single entity
// const ans = myArray.find((string)=>{
//   return string.length===3
// });
// console.log(ans);

// const users = [
//     {userId:1, userName:"Ajay"},
//     {userId:2, userName:"Ay"},
//     {userId:3, userName:"Aj"},
//     {userId:4, userName:"Singh"},
//     {userId:5, userName:"Sachin"},
// ]

// const myUser = users.find((user)=>user.userId===3);
// console.log(myUser);

//every method//
// const numbers = [2,4,6,8,10]                // to check even number
// const ans =numbers.every((number)=>number%2===0);

// every method callback function return ---> true/false(boolean)
// every method also return  ---> true/false(boolean)
// every method gives true output only when callback function condtion is ture for single element of array
// console.log(ans);

// const useCart = [
//     { productId: 1, productName: 'mobile', price: 10000 },
//     { productId: 2, productName: 'laptop', price: 40000 },
//     { productId: 3, productName: 'tv', price: 15000 }

// ]
// // check every product <30000
// const check = useCart.every((cartItem)=> cartItem.price<30000);
// console.log(check);


// some method //
// const numbers = [3,5,7,9];
// kya ek bhi number aisa hai to even hai
// if any value found even return true, not found any even value then return false
// const check = numbers.some((number)=>number%2===0);
// console.log(check);

// const useCart = [
//     { productId: 1, productName: 'mobile', price: 10000 },
//     { productId: 2, productName: 'laptop', price: 40000 },
//     { productId: 3, productName: 'tv', price: 15000 },
//     { productId: 3, productName: 'macbook', price: 15000 }

// ]
// const check= useCart.some((value)=>value.price>100000);
// console.log(check);

// fill method                    // always change original array
// value , start, end
// const myArray = new Array(10).fill(-1)
// console.log(myArray);
// fill value in empty array or new array

// const myArray = [1,2,3,4,5,6,7,8];
// myArray.fill(0,2,4);
// console.log(myArray);


// splice method//
// start, delete, insert

// const myArray = ["item1", "item2", "item3", "item4"]
// delete
// myArray.splice(1,1);
// const deleteItem =myArray.splice(1,1);
// console.log("deleted",deleteItem);
//insert
// myArray.splice(1,0, "inserted item")

// insert & delete both
// const deleteItem = myArray.splice(1,2,"item 6", "item 7")
// console.log(myArray);
// console.log("deleted",deleteItem);

// var arrays  = [
//     [1, 4, 6, 78, 8, 9, 124, 44],
//     [44, 6, 9],
//     [124, 44, 16, 9]
// ]
// var findCommonElements= function(arrs) {
//     var resArr = [];
//     for (var i = arrs[0].length - 1; i > 0; i--) {


//         for (var j = arrs.length - 1; j > 0; j--) {
//             if (arrs[j].indexOf(arrs[0][i]) == -1) {
//                 break;
//             }
//         }

//         if (j === 0) {
//             resArr.push(arrs[0][i]);
//         }


//     }
//     console.log(resArr);
    // return resArr;
// }
// findCommonElements()

// var arrays  = [
//     [1, 4, 6, 78, 8, 9, 124, 44],
//     [44, 6, 9],
//     [124, 44, 16, 9]
// ];
// function getCommonElements(arrays){//Assumes that we are dealing with an array of arrays of integers
//   var currentValues = {};
//   var commonValues = {};
//   for (var i = arrays[0].length-1; i >=0; i--){//Iterating backwards for efficiency
//     currentValues[arrays[0][i]] = 1; //Doesn't really matter what we set it to
//   }
//   for (var i = arrays.length-1; i>0; i--){
//     var currentArray = arrays[i];
//     for (var j = currentArray.length-1; j >=0; j--){
//       if (currentArray[j] in currentValues){
//         commonValues[currentArray[j]] = 1; //Once again, the `1` doesn't matter
//       }
//     }
//     currentValues = commonValues;
//     commonValues = {};
//   }
//   return Object.keys(currentValues).map(function(value){
//     return parseInt(value);
//   });
// }
// console.log(getCommonElements(arrays)); //Prints [9,44]

// const firstArray = [{ "id": 4, "name": "Tata" }, { "id": 11, "name": "Maruti" }, { "id": 14, "name": "Mahindra" }],
//   secondArray = [{ "id": 4, "name": "Tata" }, { "id": 11, "name": "Maruti" }, { "id": 15, "name": "Hyundai" }, { "id": 21, "name": "Honda" }],
//   result = firstArray.filter(o => secondArray.some(({ id, name }) => o.id === id && o.name === name));
// console.log(result);

// const myArray = [
//   [
//     { "id": 4, "name": "Tata" },
//     { "id": 11, "name": "Maruti" },
//     { "id": 14, "name": "Mahindra" }
//   ],
//   [
//     { "id": 4, "name": "Tata" },
//     { "id": 11, "name": "Maruti" },
//     { "id": 15, "name": "Hyundai" },
//     { "id": 21, "name": "Honda" }
//   ],
//   [
//     { "id": 24, "name": "Kia" },
//     { "id": 18, "name": "Skoda" },
//     { "id": 4, "name": "Tata" },
//     { "id": 11, "name": "Maruti" }

//   ]
// ]

// var ojb = [];
// for (let index=0; index<myArray.length; index++){
//   for(let i=0; i<myArray[index].length; i++){
//     ojb.push(myArray[index][i].id);
//   }
// }
// const count={};
// ojb.forEach(element=>{
//   count[element]= (count[element]||0)+1;
// });
// console.log(count);

// let array = myArray.flat(1);
// const newArr= array.reduce((accu,curr)=>{
//   accu[curr.id]=++accu[curr.id]||0;
//   return accu
// }, {})
// // console.log(newArr);
// console.log(array.filter(e=>newArr[e.id]));