let arr = [1, 6, 9, 8, 4, 7];
let n = arr.length;
let item = 4;
deleteElement = (arr, n, item) => {
    for (i = 0; i < n; i++)
        if (arr[i] == item)
            break;
    if (i < n) {
        n = n - 1;
        for (let j = i; j < n; j++)
            arr[j] = arr[j + 1];
    }
    return n;
}
n = deleteElement(arr, n, item);
for (let i = 0; i < n; i++)
    console.log(arr[i] + "");