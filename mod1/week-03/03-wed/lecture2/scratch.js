





// const letters = ["A", "B" , "C"];

// const parent = [...letters];

// console.log(parent)



// for(let letter of letters){
//     parent.push(letter);
// }

// [ 'A', 'B', 'C' ]


// REST


// function addNumbers(...restOfArguments) {
//     let sum = 0;
//     for(let num of restOfArguments){
//         if(num < 4 || (num >= 10 && num <= 15)){
//             console.log(num)
//             sum += num;
//         }
//     }
//     return sum;
// }


// console.log(addNumbers(1,2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20));



// const ditto = {
//     pokemonName: "ditto",
//     games: ["ruby", "fire red", "red", "leaf green", "sapphire"],
//     abilities: ["imposter", "limber"],
//     starterPokemon: false
// };


// const trainer = {
//     trainerName: "anthony",
//     age: 10,
//     gymBadges: [],
//     hasRunningShoes: false,
//     bike: "acro",
//     itemFinderFound: false,
//     party: {
//         ditto: {
//             ...ditto
//         }
//     }
// }


// const {trainerName, age, party, ...restOfStuff} = trainer;

// console.log(trainerName, age, party)

// console.log(restOfStuff)

// let anthonyAge = trainer.age;
// let anthonyName = trainer.trainerName;
// let anthonyParty = trainer.party;

// console.log(anthonyAge, anthonyName, anthonyParty);






//            0   1     2
// const arr = ["A", "B", "C"];


// [arr[1], arr[0]] = [arr[0], arr[1]];

// want | where they are


// console.log(arr)
