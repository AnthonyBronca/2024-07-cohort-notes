

/*
Write a function called getAverage that will take in an array of numbers and return the average.

The average is defined by adding all the numbers togethers and then dividing the sum by the count of numbers


Ex: [1,2,3]

average: 2
explanation ->  1 + 2+ 3 = 6
6 / 3 -> 2



Try to solve this using:

1. A for loop
2. A while loop
3. A for of loop

*/

// for loop
function getAverage(arrNumbers){

    let sum = 0;

    for(let i = 0; i < arrNumbers.length; i++){
        let num = arrNumbers[i];
        sum += num;
    }
    return sum / arrNumbers.length;

}

// while loop
function getAverage(arrNumbers) {

    let sum = 0;
    let i = 0;
    while(i < arrNumbers.length){
        let number = arrNumbers[i];
        sum += number
        i++
    }

    return sum / arrNumbers.length

}


//  for of loop
function getAverage(arrNumbers){
    let sum = 0;
    for(let number of arrNumbers){
        sum += number;
    }
    return sum / arrNumbers.length;
}




let nums = [5,7,1,22,33,77,23,22,100,23];
let nums2 = [3,55,6,14];

console.log(getAverage(nums)); // 31.3
console.log(getAverage(nums2)); // 19.5
