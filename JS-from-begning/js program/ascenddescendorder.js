var arr = [2, 4, 16, 9, 1, 24, 13]
var arr2 = [];
for (var i = 1; i < arr.length; i++) {
    for (var j = 0; j < i; j++)
        if (arr[i] < arr[j]) {
            var x = arr[i]
            arr[i] = arr[j]
            arr[j] = x;
        }
    for (var k = 0; k < i; k++)
        if (arr[i] > arr2[k]) {
            var y = arr[i]
            arr[i] = arr2[k]
            arr2[k] = y;
        }
}
console.log(arr, arr2)