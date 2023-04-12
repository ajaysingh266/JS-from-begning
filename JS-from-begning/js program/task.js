var arr = [4, -1, 0, 2, -75, -6, 19, -22];
let n = arr.length;

function countNegative(arr, n) {

    var negative = 0;
    var positive = 0;

    for (var i = 0; i < n; i++) {
        if (arr[i] < 0) {
            negative++;


        }
        else {
            positive++;
        }
    }

    console.log("No. of negatives=" + negative);
}
countNegative(arr, n)
