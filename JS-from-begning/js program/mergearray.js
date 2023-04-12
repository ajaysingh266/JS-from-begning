let arr1 = ["ajay", "sachin", "ankush", "ashish"];
let l1 = arr1.length;

let arr2 = [2, 4, 6, 8];
let l2 = arr2.length;
let arr3 = Array(l1 + l2);
function Merge(arr1, arr2, l1,
    l2, arr3) {

    let i = 0, j = 0, k = 0;

    while (i < l1 && j < l2) {
        arr3[k++] = arr1[i++];
        arr3[k++] = arr2[j++];
    }

    while (i < l1)
        arr3[k++] = arr1[i++];

    while (j < l2)
        arr3[k++] = arr2[j++];
}





Merge(arr1, arr2, l1, l2, arr3);


console.log("arr3 =" + [arr3]);