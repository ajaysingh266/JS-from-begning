let arr = ['ajay', 'uttam', 'sourabh', 'sachin'];
let find = 'uttam';
searchElement = () => {
    for (i = 0; i < arr.length; i++) {
        if (find === 'uttam') {
            return "found uttam"
        }
        return "not found"
    }
}
console.log(searchElement())