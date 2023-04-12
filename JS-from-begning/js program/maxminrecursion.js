var arr = [2, 4, 16, 9, 1, 24, 13]

for (var i = 1; i < arr.length; i++) {
    for (var j = 0; j < i; j++)
        if (arr[i] < arr[j]) {
            var x = arr[i]
            arr[i] = arr[j]
            arr[j] = x;
        }
} console.log(arr[0], arr[6])