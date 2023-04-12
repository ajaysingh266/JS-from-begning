let arr = [2, 4, 1, 4, 2, 5, 6, 5];
let count = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            count++;
            break;
        }
    }

}
console.log(count);