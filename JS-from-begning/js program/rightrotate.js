let arr = [1, 2, 3, 4, 5];
let n = 3;
let last;
for (let i = 0; i < n; i++) {
    last = arr[arr.length - 1];
    for (j = arr.length - 1; j > 0; j--) {
        arr[j] = arr[j - 1];
    }
    arr[0] = last;
}
console.log(arr);