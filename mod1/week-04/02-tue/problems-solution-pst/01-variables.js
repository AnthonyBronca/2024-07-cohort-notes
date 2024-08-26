

/*


You are provided a function.

Create a variable called "name" in the global scope -> assigned to "Sam"
Create a variable called "name" in the function scope -> assigned to -> "Anthony"
Create a variabled called "name" in the block scope -> assigned to "Alexi"


*/

// Your code here

const name = "sam"; // global scope

function printName(){
    const name = 'anthony';
    for(let i = 0; i < 3; i++){ // print name 10 times
        if(name !== undefined){
            const name = "alexi";
            console.log(name)
        }
        console.log(name)
    }
    console.log(name)
}

console.log(name); // Sam

printName();

/*
Terminal Expected output
Sam
Alexi
Anthony
Alexi
Anthony
Alexi
Anthony
Anthony

*/
