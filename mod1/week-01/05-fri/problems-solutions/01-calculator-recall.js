/*

Write a function called calculator. It will take in 3 arguments. argument 1 and 2 are both numbers, and argument 3 is a string of an operation.

The calculator can only do the following operations:
    - "addition": returns the sum of the 2 numbers
    - "subtraction": returns the difference of the 2 numbers
    - "multiplication": returns the product of the 2 numbers
    - "division": returns the quotient of the 2 numbers


If the operation passed in is not one of the 4 listed, the calculator should return a string that says "Invalid Operation."


*/



console.log(calculator(15,10, "addition")); // 25
console.log(calculator(10,2, "subtraction")); // 8
console.log(calculator(4,4, "multiplication")); // 16
console.log(calculator(25,5, "division")); // 5
console.log(calculator(100,20, "remainder")); // Invalid Operation.
