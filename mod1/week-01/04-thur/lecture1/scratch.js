let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];



// To write a loop we can do:

for (let i = 0; i < arr.length; i++) {
    let subArr = arr[i]; // this is each array within each index.
    // to iterate into this subArray we can use another for loop!
    for (let j = 0; j < subArr.length; j++) {
        let number = subArr[j];
        console.log(number)
    }

}
