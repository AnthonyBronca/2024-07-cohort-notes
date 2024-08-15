



// SPREAD

// const letters = ["A", "B", "C"];
// const container = [...letters]

// console.log(container)


// function addNumbers(...restOfNumbers){
//     let sum = 0;
//     if(restOfNumbers){
//         for(let num of restOfNumbers){
//             sum += num;
//         }
//     }
//     return sum;
// }

// console.log(addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 , 20, 1, 1, 1, 1,1))



// const squirtle = {
//     name: "Squirtle",
//     type: "water",
//     starter: true,
//     startingLevel: 3,
//     maxLevel: 100
// }


// const trainer = {
//     name: "anthony",
//     pokemon: {
//         ...squirtle
//     }
// }



// DESTRUCTing

let trainerName = trainer.name;
let trainerPokemon = trainer.pokemon.name;

const {name} = trainer;


// console.log(name)


// console.log(trainer)


// const arr = ["A", "C", "B", "D"];

// [arr[1], arr[0]] = [arr[0], arr[1]];

// console.log(arr);
