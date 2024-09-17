// truthy falsy
// let name = null;
// if(name){
//     console.log("we hit the true");
// } else{
//     console.log("we hit the false");
// }


// introduction to recursion

/*

3 things that make up recursion

1. base case -> condition that must be met, to stop the loop
    - dr stange -> once dormahmu makes the bargain the loop stops
2. recursive case -> condition that causes our loop to run
    - condition -> if dormahmu does not bargain
3. recursive step -> the action each recursive function will do to slowly get to base case
    - check to make sure our time magic thing is active
    - call his name
    - get destroyed

*/

// create a resursive loop that will print out a number, and stop once we hit 100

// function recursiveNumberPrint(currNum){
//     // base case
//     if(currNum >= 100) return;
//     // recursive case
//     console.log(currNum);

//     // recursive step
//     return recursiveNumberPrint(++currNum)
// }


// recursiveNumberPrint(0)



/*

abbvreviate recursiveNumberPrint -> RNP

currNum 0


RNP -> 0
    RNP -> 1
        RNP -> 2
            RNP -> 3
                RNP -> return undefined
            RNP -> return undefined
        RNP -> return undefined
    RNP -> return undefined
RNP -> return undefined

*/



// recursively print every letter in the name
// let name = "anthony";
// // ""

// function recursiveNamePrint(name){
//     // base case
//     if(!name) return;
//     // recursive case
//     console.log(name[0])
//     // recurisve step
//     let newName = name.slice(1);
//     return recursiveNamePrint(newName)

// }


// recursiveNamePrint(name);



// iterate through the array, and return if the element is 50, or return undefined if not found

// function recursiveArrayPractice(arr){

//     // base case 1 -> if we find a 50
//     if(arr[0] === 50) return arr[0];
//     // base case 2 -> if we go through the entire array, but never found a 50
//     if(arr.length === 0) return "Did not find anything"
//     // recursive case
//     // recursive step
//     arr.shift();
//     return recursiveArrayPractice(arr);

// }


// let arr = [23,44,50,61,28, 14, 10, 5, 50, 6, 9, 100, 200, 300]; // print out 50, because we found it in the middle

// console.log(recursiveArrayPractice(arr));




const iceCreamFlavors = ["mint", "chocolate", "neopolitan", "vanilla", "double chocolate", "rocky road"];

const anthonysFavorite = "pistachio";

const checkIceCreamFlavors = (flavors, fav) => {

    // base case:
    if(flavors[0]  === fav) return "The store has your favorite icecream";

    // base case 2:
    if(flavors.length === 0) return "The store does not have your favorite icecream";

    // recursive case
    flavors.shift();
    console.log(flavors)
    return checkIceCreamFlavors(flavors, fav);

}


console.log(checkIceCreamFlavors(iceCreamFlavors, anthonysFavorite));
