let arr = ["d", "x", "a", "t", "k"];


funelementReverse = (arr) => {

    let leElement = 0;
    let riElement = arr.length - 1;

    while (leElement < riElement) {

        let temp = arr[leElement];
        arr[leElement] = arr[riElement];
        arr[riElement] = temp;


        leElement++;
        riElement--;
    }
    console.log(arr);
}
elementReverse(arr);