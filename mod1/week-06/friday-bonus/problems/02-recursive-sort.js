/*
    Recursive Sort

    Given an array of numbers, write a function that returns a new array of numbers sorted from lowest to highest.

    console.log(sort([])) // prints []
    console.log(sort([9])) // prints [9]
    console.log(sort([5, 4, 3, 2, 1])) // prints [1, 2, 3, 4, 5]
    console.log(sort([14, 5, 10, 6, 3, 4, 21, 16, 9])); // prints [ 3, 4, 5, 6, 9, 10, 14, 16, 21 ]
*/

function sort(nums) {
    // [14, 5, 10, 6, 3, 4, 21, 16, 9]
    if (nums.length == 0) return [];
    
    let smallest = nums[0];
    let smallestIndex = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < smallest) {
            smallest = nums[i];
            smallestIndex = i;
        }
    }

    smallest = nums.splice(smallestIndex, 1);

    return [...smallest, ...sort(nums)];
    // return smallest.concat(sort(nums)).flat();
}
console.log(sort([14, 5, 10, 6, 3, 4, 21, 16, 9]));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = sort;
} catch (e) {
    module.exports = null;
}