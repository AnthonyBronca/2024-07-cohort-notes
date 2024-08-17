// ()=> // is the same thing function()


// const obj = {};
// Syntax for creating key value

// obj["key"] = "1"; // bracket notation
// obj.key = 1; // dot notatiom


// Syntax for checking if a key-value pair exists

// if(obj["key"] !== undefined ){
//     console.log("'key' exists")
// } else{
//     console.log("'key' is not a key in obj");
// }



// Syntax for updating a key-value pair
// obj["key"] += 1;
// obj.key = "water"


// What DATA TYPE does Object.keys return
// an array of string, where each string is a key in the object


// obj.name = "anthony";
// obj["food"] = "pizza";
// obj.country = "usa";
// obj.myArray = [1,2,3]

// console.log(Object.keys(obj));


// What data type does Object.values return
// an array with all the values in it

// console.log(Object.values(obj));

// Which for loop do we use to iterate through objects?

// for(let key in <obj you want to iterate through>){
//     let val = <obj you want to iterate through>[key];
// }

// for(let key in obj){
//     let val = obj[key];
//     console.log("When the key is :  ", key),
//     console.log("The value is :  ", val);
// }




// console.log(obj)





// CALLBACKS



// const addNums = (n1, n2) => n1 + n2;

// const subNums = (n1, n2) => n1 - n2;




// const calculate = (n1, n2, cb) => {
//     return cb(n1, n2);


// }


// console.log(calculate(1,2, addNums));
// console.log(calculate(5,3, subNums));





// const numbers = [1,2,3,4];

// const doubledNumbers = numbers.map((el)=> {
//     return el * 2
// })

// console.log(doubledNumbers)
