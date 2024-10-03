


// non-memoized
// function fib(n) {
//     if (n === 1) return 0;
//     if (n === 2) return 1;
//     return fib(n - 1) + fib(n - 2);
// }

// cached- memoized version

// const cache = {};


// function fib(n) {
//     if (n === 1) return 0;
//     if (n === 2) return 1;
//     // if we have not cached
//     if(!cache[n]){
//         // then we do the computation -> and save it
//         cache[n] = fib(n - 1) + fib(n - 2);

//     }
//     return cache[n];
// }


// const start = Date.now();
// fib(25); // 7ms -- uncached
// fib(35); // 69ms --uncached
// fib(45); // 7.392 seconds --uncached
// fib(50); // 81.625 seconds --uncached

// fib(40)
// fib(7000)
// fib(25); // 0ms -- cached
// fib(35); // 0ms --cached
// fib(45); // 0ms --cached
// fib(50); // 0ms --cached
// fib(2500); // 1ms -- cached
// fib(4000); //4ms -- cached
// fib(7000); //6ms -- cached
// fib(7876); // 6ms -- cached

// const end = Date.now();
// console.log(end - start, "ms");
// console.log(cache)


// const arr = [1,2,3,5,6,7,8,9];

// console.log(arr.includes(9)); // Time COMPLEXITY? O(n)
// const mySet = new Set([1,2,3,5,6,7,8,9]);

// const mySet = new Set("hello world");

// mySet.add(10); // O(1) -> works similar to push,
// console.log(mySet.has(9)); // O(1) -> works WAY BETTER than includes

// mySet.forEach((el) => {
//     console.log(el)
// })


// console.log(mySet);
// - sets order is not guarnteed
// - sets are efficient
// - no index, no value?
// - sets do not allow duplicate
