let arr = [1, 2, 3, 4, 5];
let n = 4;
let first;
for (let i = 0; i < n; i++) {
    first = arr[0];
    for (j = 0; j < arr.length - 1; j++) {
        arr[j] = arr[j + 1];
    }
    arr[j] = first;
}
console.log(arr);