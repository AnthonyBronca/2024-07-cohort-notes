// GREEN - TDD

// BLUE - Refactor
function getSum(num1, num2){
    if(typeof num1 !== "number" || typeof num2 !== "number"){
        return "You did not pass in valid data."
    }
    return num1 + num2;
}



// singular.plural
// module.exports = {getSum}; // a
// module.exports = [getSum]; // b
module.exports = getSum; // c
