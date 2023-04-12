const arr = [0, 2, 4, 6, 8, 0, 1, 3, 5, 7, 9, 1];
let i = 0;
let j;
let k;
sortOddEven = (arr = []) => {

    while (i < arr.length - 1) {
        j = i;
        while (!(arr[j] % 2) && arr[j + 1] % 2) {
            k = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = k;
            if (!j) {
                break;
            };
            j--;
        };
        i++;
    };
};
sortOddEven(arr)
console.log(arr)