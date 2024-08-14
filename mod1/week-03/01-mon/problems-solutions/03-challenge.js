/*

write a function using fat arrow syntax that will iterate through an array
and add all the even numbers together to return their sum.

Use a ternary and a fat arrow, as well as use const when needed.

The function should return 0 if there are no even numbers to add


*/

const addEvens = (arrNums) => {
    let sum = 0;
    for(let num of arrNums){
        num % 2 === 0 ? sum += num : false
    }
    return sum;
}





console.log(addEvens([1,2,3,4])); // 6
console.log(addEvens([2,2,2])); // 6
console.log(addEvens([100,2,5,5])); // 102
console.log(addEvens([5,5,5])); // 0
