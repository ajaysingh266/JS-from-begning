// let str = "welcome to this java script guide"

// stringReverse = () => {

//     let leftAlpha = 0;
//     let rightAlpha = length - 1;

//     while (leftAlpha < rightAlpha) {

//         let temp = str(leftAlpha);
//         str(leftAlpha) = str(rightAlpha);
//         str(rightAlpha) = temp;


//         leftAlpha++;
//         rightAlpha--;
//     }
//     console.log(str);
// }
// stringReverse(str);

// 1-CALLBACK FUNCTION WITH EXAMPLE

// function modifyArray(arr, callback) {
//     // do something to arr here
//     arr.push(100);
//     // then execute the callback function that was passed
//     callback();
// }

// var arr = [1, 2, 3, 4, 5];

// modifyArray(arr, function () {
//     console.log("array has been modified", arr);
// });

// 2-REVERSE STRING

// var string = "Welcome to this Javascript Guide!";

// // Output becomes !ediuG tpircsavaJ siht ot emocleW
// var reverseEntireSentence = reverseBySeparator(string, "");

// // Output becomes emocleW ot siht tpircsavaJ !ediuG
// var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

// function reverseBySeparator(string, separator) {
//     return string.split(separator).reverse().join(separator);
// }
// console.log(reverseEntireSentence)

// 3-OBJECT IS AN ARRAY

// let param = [1, 2, 4]
// function greet(param) {
//     if (typeof param === "string") {
//         return ("IT IS NOT ARRAY")
//     }
//     else {
//         return (" AN ARRAY")
//         // If param is of type array then this block of code would execute
//     }

// }
// console.log(greet(param))

// 4-HOW TO EMPTY AN ARRAY

// var arrayList = ['a', 'b', 'c', 'd', 'e', 'f']; // Created array
// var anotherArrayList = arrayList;  // Referenced arrayList by another variable
// arrayList = []; // Empty the array
// console.log(anotherArrayList); // Output ['a', 'b', 'c', 'd', 'e', 'f']
// console.log(arrayList);

// Method 2

// var arrayList = ['a', 'b', 'c', 'd', 'e', 'f']; // Created array
// var newArrayList = arrayList;  // Referenced arrayList by another variable
// arrayList.splice(0, arrayList.length); // Empty the array by setting length to 0
// console.log(newArrayList);

// 5-CHECK NUMBER IS AN INTEGER.
// var num=9.5;
// function isInt(num) {
//     return num % 1 === 0;
//   }

//   console.log(isInt(num));

// 6-

//
// let arr = [2, 4, 7, 5]
// function duplicate(arr) {
//     return arr.concat(arr);
// }
// console.log(duplicate(arr))

// 8 - MUL FUNCTION

// function mul(x) {
//     return function (y) { // anonymous function- an anonymous function is something that is declared without an identification
//         return function (z) { // anonymous function -An anonymous function cannot be accessed after it is created; it can only be retrieved by a variable in which it is stored as a function value
//             return x * y * z;
//         };
//     };
// }
// console.log(mul(3)(6)(9))

// 9-FUNCTION ALLOW THIS

// function createBase(baseNumber) {
//     return function (n) {
//         return baseNumber + n;

//     }


// }
// var add = createBase(6);
// console.log(add(10))
// console.log(add(21))


// 10 - FIZZBUZZ

// for (let i = 1; i <= 100; i++) {

//     console.log(i % 3 == 0 && i % 5 == 0 ? i + " fizzbuzz" : i % 3 == 0 ? "fizz" : i % 5 == 0 ? "buzz" : i);
// }

// 11 - anagrams

// var first = "mary";
// var second = "army";
// function isAnagram(first, second) {
//     first = first.split("").sort().join("");
//     second = second.split("").sort().join("");
//     return (first == second);
// }
// console.log(isAnagram(first, second))

// 14 - output
// var y = 1;
// if (function f() { }) {
//     y += typeof f;
// }
// console.log(y);

// 15 - output

//     (function () {
//         var a = b = 5;
//     })();

// console.log(b);

// 16- anonymous function

function multiply(a) {
    return function (b) {
        return a * b;
    }
}

console.log(multiply(5)(6));