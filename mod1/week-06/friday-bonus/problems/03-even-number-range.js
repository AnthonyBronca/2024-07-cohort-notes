/* Even Number Range

    Write a function that accepts two numbers. 
    The function should return an array of all even numbers between the two arguments inclusively.

    console.log(evenNumberRange(-3, 2)); // prints [-2, 0, 2]
    console.log(evenNumberRange(22, 25)); // prints [22, 24]
    console.log(evenNumberRange(2, 0)); // prints []
*/

function evenNumberRange(min, max) {
    // let res = [];
    
    // for (min; min <= max; min += 2) {
    //     if (min % 2 == 0) {
    //         res.push(min);
    //     } else {
    //         min++
    //         res.push(min);
    //     }
    // }

    // return res;

    if (min > max) return [];
    if (min == max) {
        if (min % 2 == 0) {
            return [min];
        }
        return [];
    }

    if (min % 2 == 0) {
        return [min, ...evenNumberRange(min + 2, max)];
    } else {
        return [...evenNumberRange(min + 1, max)];
    }
}

console.log(evenNumberRange(-3, 2)); // prints [-2, 0, 2]
console.log(evenNumberRange(22, 25)); // prints [22, 24]
console.log(evenNumberRange(2, 0)); // prints []

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = evenNumberRange;
} catch (e) {
    module.exports = null;
}