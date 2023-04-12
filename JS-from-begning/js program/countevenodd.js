let arr = [7, 3, 6, 9, 12, 5]
let n = arr.length
CountEvenodd = (arr, size) => {
    let evenCount = 0;
    let oddCount = 0;


    for (var i = 0; i < size; i++) {
        if (arr[i] % 2 === 0)
            evenCount++;

        else
            oddCount++;

    }
    console.log("even elements =" + evenCount + ", " + "odd elements =" + oddCount);
}
CountEvenodd(arr, n)
