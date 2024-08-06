


// // helper function
// function double(num1){
//     return num1 * 2;
// }

// // helper function
// function triple(num){
//     return num * 3;
// }

// // main function
// function multiplier(val, func){
//     return func(val);
// }

// console.log(multiplier(5, double)); // 10
// console.log(multiplier(3, triple)); // 9



// console.log(double(5)); // 10


let favoriteFoods = ["cake", "waffles", "icecream", "steak", "sushi", 'pizza'];
let restaurantMenu = [
    "pancakes",
    "coffee",
    "eggs",
    "waffles",
    "mole",
    "curry",
    "tikamasala",
    "steak",
    "pasta",
    "calzone",
    "pie",
    "pastry",
    "donuts",
    "puddings",
    "creme brulee"
]


/*

Write a function called countFavorite Foods, This is a function that will count how many items on a menu are anthony's favorite foods
anthony will only eat at a restaurant that has 2 or more favorite food items. If anthony would eat at this restaurant
return true, otherwise return false




*/

function minFavFoodCount(want, have){
    if(want <= have){
        return true;
    } else{
        return false;
    }
}


function countFavoriteFoods(menu, favFoodList, func, want){
    let count = 0;
    for(let i = 0; i < menu.length; i++){
        let menuItem = menu[i];
        if(favFoodList.includes(menuItem)){
            count++
        }
    }
   return func(want,count)
}


console.log(countFavoriteFoods(restaurantMenu, favoriteFoods, minFavFoodCount, 4)); // true
