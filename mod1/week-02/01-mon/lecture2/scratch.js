

// helper function
function double(num){
    return num * 2;
}

// helper function
function triple(num){
    return num * 3;
}


function multiplier(num, func){
    return func(num);
}


console.log(multiplier(17, triple));
console.log(multiplier(5, double));
// console.log(multiplier(3, triple) + 10);

// console.log(double(2)); // 4;
// console.log(double(5)); // 10 ;
// console.log(triple(3)); // 9
