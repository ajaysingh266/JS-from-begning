let array = [4, 7, 11, 27, 15]
var sum = function (array) {
    if (array.length === 0) {
        return 0;
    }
    function add(array, i) {

        if (i === array.length - 1) {
            return array[i];
        }
        return array[i] + add(array, i + 1);
    }
    return (add(array, 0));
};
console.log(sum(array), array)