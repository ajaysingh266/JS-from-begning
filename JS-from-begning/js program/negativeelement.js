var arr = [4, -5, 0, 2, -67, 8, 10, -34];

function negativeNumbers(array) {

    var negatives = [];
    var j = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            negatives[j] = arr[i];
            j++;

        }


    }

    console.log(negatives);


}
negativeNumbers(arr);
