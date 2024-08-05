

/*

Write a function called checkExists. It will take in a string and a helper function called myIncludes.
The function should invoke the myIncludes helper and return the results of that function if it is true or false. If the helper returns an error message
it should return that error message.


HINT: You can maybe check for the type of the return


*/




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

    if(typeof str !== str){
        return "You did not pass in a valid string";
    } else{
        return vipList.includes(str);
    }
};



console.log(checkExists("Anthony")); // true
console.log(checkExists("Sam")); // true
console.log(checkExists("Cait")); // false
console.log(checkExists("Edward")); // false
console.log(checkExists(1)); // "You did not pass in a valid string"
