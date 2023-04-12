let arr = [1, 2, 3, 2, 1, 4, 5, 3, 4];
for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
        if (i == j) {
            continue;
        }
        if (arr[i] == arr[j]) {
            break;
        }
    }
    if (j == arr.length) {
        console.log(arr[i]);
    }
}