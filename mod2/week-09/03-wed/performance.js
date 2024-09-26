// Adds up positive integers from 1-n


// TIME COMPLEXITY?: O(n) => looping n number of elements -> linear
function addNums(n) {
    total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}


// Adds up values of addNums(1) through addNums(n)
// TIME COMPLEXITY?: O(n ^2 ) - squared
function addManyNums(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) { // O(n)
        total += addNums(i); // O(n)
    }
    return total;
}


// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
    sums = [];

    for (let n = increment; n <= 10 * increment; n += increment) {
        sums.push(addNums(n));
    }

    return sums;
}

// Runs `addManyNums` in 10 increasing increments
// TIME COMPLEXITY?:
function addManyNums10(increment) {
    sums = [];

    for (let n = increment; n <= 10 * increment; n += increment) {
        sums.push(addManyNums(n));
    }

    return sums;
}

function addNums10Timing(increment) {
    const sums = [];

    for (let n = increment; n <= 10 * increment; n += increment) {
        startTime = Date.now();
        sums.push(addNums(n));
        endTime = Date.now();
        console.log(`${endTime - startTime}`);
    }

    return sums;

}


function addManyNums10Timing(increment) {
    const sums = [];

    for (let n = increment; n <= 10 * increment; n += increment) {
        startTime = Date.now();
        sums.push(addManyNums(n));
        endTime = Date.now();
        console.log(`${endTime - startTime}`);
    }

    return sums;

}


n = 1_000_000
console.log(`addNums(${n}): `);
addNums10Timing(10_000_000);

console.log("\n***********\n");

n = 10_000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
