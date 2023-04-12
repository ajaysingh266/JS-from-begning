const arr = [1, 5, 6, 2, 1, 6, 1];
const count = {};
arr.forEach(e => count[e] ? count[e]++ : count[e] = 1);

console.log(count)
// Arrow functions are the best fit for Array manipulation functions (map/reduce/filter) and with the callback functions.