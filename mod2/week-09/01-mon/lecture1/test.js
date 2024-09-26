// function addNums(n) {
//     total = 0;

//     for (let i = 1; i <= n; i++) {
//         total += i;
//     }

//     return total;
// }


// let increment = 1_000_000
// for (let n = increment; n <= 20 * increment; n += increment) {
//     startTime = Date.now();
//     addNums(n);
//     endTime = Date.now();

//     console.log(`${endTime - startTime}`);
// }



const someArr = new Array(10);
function addToArray(el){
    someArr.push(el);
}

let word = "sam";

for(let i = 0; i < word.length; i++){
    addToArray(i);
}


console.log(someArr)
