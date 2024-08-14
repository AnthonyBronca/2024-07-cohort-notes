/*


Write a function called repeatedMath. It will take in a number to do math on, a number of times to do the math,
and a helper function.
Example:

Passing in 2, 3, addFive will do the following

Pass 2 into addFive 3 times. We should return the result of all these changes.

2 + 5, 2 + 5, 2 +5 -> 7 + 7 + 7 -> 21

*/



// Your code here

function repeatedMath(num, times, func){
    let res = 0;
    for(let i = 0; i < times; i++){
        res += func(num);
    }
    return res;
}




// DO NOT MODIFY ANYTHING BELOW THIS LINE
function addFive(num){
    return num + 5;
}

function double(num){
    return num * 2;
}




console.log(repeatedMath(2,3, addFive)); // 21
console.log(repeatedMath(2,2, double)); // 8
