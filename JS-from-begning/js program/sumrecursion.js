// let array = [4, 7, 11, 27, 15]
// var sum = function (array) {
//     if (array.length === 0) {
//         return 0;
//     }
//     function add(array, i) {

//         if (i === array.length - 1) {
//             return array[i];

//         }
//         return array[i] + add(array, i + 1);
//     }
//     return (add(array, 0));
// };
// console.log(sum(array))
// sum(array)


let Arr = [23, 6, 3, 4, 7];
let n = Arr.length;
Sum = (Arr, n) => {
    if (n <= 0)
        return 0;
    return (Sum(Arr, n - 1) + Arr[n - 1]);
}


console.log(Sum(Arr, n))



// var n = 5;
// function print(n) {


//     if (n == 0) {
//         return;
//     }


//     print(n - 1);
//     console.log(n);
// }
// print(n);