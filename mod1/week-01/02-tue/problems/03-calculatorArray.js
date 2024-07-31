/*
Write a function called calculatorArray. This function will take two parameters: "nums" and "operation".
      "nums" will be an array of numbers, but make sure to pay attention to the datatype of the numbers (HINT: Use the typeof functionality. Look on MDN for more information)
      Valid "operation" will be a string of "addition", "subtraction", "division", and "multiplication"

This function should be able to go through the entire "nums" array and perform the operation between each number and return the resulting number.

If a non-valid operation is provided to the function, the function should return "Did not pass in a valid operation."

While going through the "nums" array, if you run into a non-valid number (boolean, null, string, etc.), skip to the next element of the array and continue performing the operation.

If no valid numbers are provided in the "nums" array, the function should return "Did not pass in any valid nums."
*/


/* WRITE YOUR FUNCTION HERE*/



/* ----------------- COMMENT THESE OUT WHEN YOU ARE TO TEST OUT YOUR TEST SPECS FOR A CLEANER TEST ----------------- */
// console.log(calculatorArray([1, 6, true, -12], "addition"));      // -5
// console.log(calculatorArray([1, "9", 13], "addition"));           // 14
// console.log(calculatorArray([19, -33, 7], "subtraction"));        // 45
// console.log(calculatorArray(["0", "9", 10, 5, 2], "division"));   // 1
// console.log(calculatorArray([0, 10, 99], "division"));            // 0
// console.log(calculatorArray([2, 4, null], "multiplication"));     // 8
// console.log(calculatorArray([5, 3, 7], "multiplication"));        // 8
// console.log(calculatorArray(["9", "8", 2], "multiplication"));    // 2
// console.log(calculatorArray([1, 2, 3, 4], "modulo"));             // Did not pass in a valid operation.
// console.log(calculatorArray(['1', '2', '3', '4'], "addition"));   // Did not pass in any valid nums.


/* DO NOT MODIFY ANYTHING BELOW THIS LINE */
module.exports = {calculatorArray};
