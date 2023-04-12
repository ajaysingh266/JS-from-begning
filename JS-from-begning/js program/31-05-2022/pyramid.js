let n = 5;
let sep = "";

for (let i = 1; i <= n; i++) {

    for (let j = n; j > i; j--) {
        sep += " ";
    }

    for (let k = 0; k < i * 2 - 1; k++) {
        sep += "*";
    }
    sep += "\n";
}
console.log(sep);