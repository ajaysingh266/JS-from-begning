let arr = [7, 3, 6, 9, 12, 5]
let n = arr.length
let arrEven = [];
let arrOdd = [];
var k = 0;
var k2 = 0;


for (var i = 0; i < n; i++) {
    if (arr[i] % 2 === 0) {
        arrEven[k] = arr[i]
        k++;
    }
    else {
        arrOdd[k2] = arr[i]
        k2++;

    }
}
console.log(arrEven, arrOdd)


