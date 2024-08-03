/*

Write a function called isInBucketList. The function will take in a bucket list of countries, and a target country.
The function should return true if the target country is in the bucket list, and false if it is not.

Try to solve this in 2 ways. One can use the .includes() method, but the other should not.

*/


function isInBucketList(countries, targetCountry){
    return countries.includes(targetCountry)
}



function isInBucketList(countries, targetCountry){
    for(let country of countries){
        if(country === targetCountry){
            return true;
        }
    }
    return false
}


let countries = ["Unites States", "England", "France", "Spain", "Japan", "Italy", "Brazil", "Mexico", "Canada", "Russia"];

console.log(isInBucketList(countries, "England")); // true
console.log(isInBucketList(countries, "Spain")); // true
console.log(isInBucketList(countries, "Russia")); // true
console.log(isInBucketList(countries, "China")); // false
console.log(isInBucketList(countries, "South Korea")); // false
console.log(isInBucketList(countries, "Argentina")); // false
