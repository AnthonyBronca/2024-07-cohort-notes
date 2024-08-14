

/*

Write a function called checkExists. It will take in a string and a helper function called myIncludes.
The function should invoke the myIncludes helper and return the results of that function if it is true or false. If the helper returns an error message
it should return that error message.


HINT: You can maybe check for the type of the return


*/

function checkExists(str, helperfunc){
    return helperfunc(str);
}


// do not modify this helper function
function myIncludes(str){
    let vipList = [
        "Anthony",
        "Sam",
        "Gabe",
        "Zaviar",
        "Vincent",
        "Alyssa",
        "Alexi",
        "Kait"
    ];

    if(typeof str !== "string"){
        return "You did not pass in a valid string";
    } else{
        return vipList.includes(str);
    }
};



console.log(checkExists("Anthony", myIncludes)); // true
console.log(checkExists("Sam", myIncludes)); // true
console.log(checkExists("Cait", myIncludes)); // false
console.log(checkExists("Edward", myIncludes)); // false
console.log(checkExists(1, myIncludes)); // "You did not pass in a valid string"
