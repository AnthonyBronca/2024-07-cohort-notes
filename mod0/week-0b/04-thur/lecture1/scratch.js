



// console.log(arr[1]); // anthony

// arr[0] = "bob"
// arr[3] = "bob"

// console.log(arr)
// console.log(arr[3]); //


/*  PUSH - adds to the back of an array */

// let arr = ["sam", "anthony", "gabe"];
// let idk = arr.push("bob")

// console.log(arr, "is the updated Arr") // mutated arr:[ 'sam', 'anthony', 'gabe', 'bob' ]
// console.log(idk, "is the updated length")





// function myPush(newValue){
    //     // console.log(arr[arr.length])
    //     arr[arr.length] = newValue
    //     return arr.length;
    // }


    // let idk = myPush("d")
    // console.log(arr)

    // console.log(idk)



// let arr = ["a", "b", "c"];
// let idk = arr.pop();
// console.log(arr)
// console.log(idk)
// let idk2 = arr.pop();
// console.log(idk2)


// arr[2] = null;

// console.log(arr.length)
// arr.length --

// console.log(arr)
// console.log(arr.length)

/*

Remove from back of array - pop() -> returns the removed item
add to back of an array - push() -> returns the new length of array


*/


// let vegetableList = ["onion", "carrot", "tomato"];
// let fruitList = ["apple", "banana", "peach"]

// // remove the last element from vegetable
// let lastEl = vegetableList.pop();
// fruitList.push(lastEl)

// console.log(vegetableList)
// console.log(fruitList)

// add that removed element into the fruitList array


let arr = ["a","b","c"];


/*
["a","b","c"]

[a,b,c]

d

*/

// let idkUnshift = arr.unshift("d");

// console.log(idkUnshift)
// // console.log(arr)

// let idkShift = arr.shift();
// // console.log(arr)
// console.log(idkShift)





// let peopleList1 = ["anthony", "gabe", "sam"];
// let peopleList2 = ["ed", "zaviar", "alexi"];

// let sam = peopleList1.pop(); // take sam out of list 1
// peopleList2.shift(); // take ed out of list 2

// peopleList2.unshift(sam) // add sam to the front of list 2

// /*
// [ 'anthony', 'gabe' ]
// [ 'sam', 'zaviar', 'alexi' ]

// */

// peopleList2.shift();
// let idk = peopleList2.shift();

// console.log(peopleList1)
// console.log(peopleList2)

// console.log(idk)


// let regularPassengers = ["anthony", "sam", "ed"];

// let vipPassengers = ["zaviar"];


// //     take in the name of the person you want to add
// //     take in the list you want to add them to
// function addCustomerToVIPList(name, arrToAdd, arrToRemove){

//     if(arrToRemove[0] === name){
//         arrToRemove.shift()
//     }
//     arrToAdd.push(name);

// }



// addCustomerToVIPList("anthony", vipPassengers, regularPassengers);
// addCustomerToVIPList("sam", vipPassengers, regularPassengers);
// addCustomerToVIPList("zaviar", regularPassengers, vipPassengers);


// console.log(vipPassengers, "-> vip list")
// console.log(regularPassengers, "-> regular list")
