let n = 5;
let sep = "";

for (i = 0; i < n; i++) {
    for (j = 0; j < i; j++) {
        sep += " ";
    }
    for (k = 0; k < (n - i) * 2 - 1; k++) {
        sep += "*"
    }
    sep += "\n";
}

for (let i = 2; i <= n; i++) {

    for (let j = n; j > i; j--) {
        sep += " ";
    }

    for (let k = 0; k < i * 2 - 1; k++) {
        sep += "*";
    }
    sep += "\n";
}

console.log(sep);