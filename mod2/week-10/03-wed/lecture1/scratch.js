
// non memoized
// function fib(n) {
//     if (n === 1) return 0;
//     if (n === 2) return 1;
//     return fib(n - 1) + fib(n - 2);
// }



//memoized version
// const cache = {};
// function fib(n){
//     if(n === 1) return 0;
//     if(n === 2) return 1;
//     // check if it is not cached
//     if(!cache[n]){
//         // store the results in the cache
//         cache[n] = fib(n - 1) + fib(n - 2);
//     }

//     return cache[n];
// }

// const start = Date.now();
// fib(5000);
// const end = Date.now();
// console.log(end - start, "ms");
// console.log(cache)


// const arr = [];

// arr.push("a");
// arr.push("b");
// arr.push("c");
// arr.push("d");

// console.log(arr.includes("a")); // TIME COMPLEXITY? O(N)

// SET
// const mySet = new Set([1,2,3,4,5,6]);

// const test = new Set();
// const mySet = new Set("hello world");

// mySet.add(7); // TIME COMPLEXITY: O(1)
// // console.log(mySet.has(5)); // TIME COMPLEXITY: O(1)
// mySet.forEach((el) => { // O(n)
//     console.log(el);
// })

// console.log(mySet)






//  aX0153had
// let name = "anthony";
