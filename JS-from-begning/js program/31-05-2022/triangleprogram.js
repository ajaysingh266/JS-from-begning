let v = 5
let sep = ''

function printPyramid(v) {
    for (i = 1; i <= v; i++) {

        for (j = 1; j <= i; j++) {
            sep = sep + "*"
        }
        console.log(sep);
        // return sep
        sep = ""
    }
}


printPyramid(5)