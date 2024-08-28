/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

***********************************************************************/



/*
n = 5

5 + ?
  4 + ?
    3 + ?
      2 + ?
        1  + ?
          0


*/

// function sumToN(n) {

//   // base case when n is smaller than 0 stop
//   if(n < 0) return null;

//   // base case, when n is 0, return 0
//   if(n === 0) return 0;

//   return n + sumToN(--n)

// }


const sumToN = (n, sum = 0) => {
  if(n < 0) return null;
  if(n === 0) return sum;
  sum += n;
  return sumToN(--n, sum)
}

console.log(sumToN(5)) // returns 15
console.log(sumToN(1))  // returns 1
console.log(sumToN(9))  // returns 45
console.log(sumToN(-8))  // returns null


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}
