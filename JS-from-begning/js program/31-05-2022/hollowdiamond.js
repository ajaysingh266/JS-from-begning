let n = 5;
let sep = "";

for (let i = 1; i <= n; i++) {

    for (let j = n; j > i; j--) {
        sep += " ";
    }

    for (let k = 0; k < i * 2 - 1; k++) {
        if (k === 0 || k === 2 * i - 2) {
            sep += "*";
        }
        else {
            sep += " ";
        }
    }
    sep += "\n";
}
for (i = 1; i <= n - 1; i++) {
    for (j = 0; j < i; j++) {
        sep += " ";
    }
    for (k = (n - i) * 2 - 1; k >= 1; k--) {
        if (k === 1 || k === (n - i) * 2 - 1) {
            sep += "*";
        }
        else {
            sep += " ";
        }

    } sep += "\n";
}
console.log(sep);