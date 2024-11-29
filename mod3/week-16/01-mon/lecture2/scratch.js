




// url: https://pokeapi.co/api/v2/pokemon/



// TO GET DATA FROM 3RD PARTY INTO JS -> FETCH


// const pokemon = fetch("https://pokeapi.co/api/v2/ditto"); //async -> back burner


// THEN CHAINING -> slightly deprecated

// const ditto = fetch("https://pokeapi.co/api/v2/pokemon/ditto")
// .then((res) => res.json())
// .then((data) => data)
// ;


// console.log("hello")
// console.log(ditto);
// console.log(pokemon); // sync

/*

Promise lives in 1 of 3 states:
- pending -> It has not fully executed yet and we will come back to it later
- fulfilled -> request has been completed and we probably have some data
- rejected -> request has been sent, but our request was denied (no data)

*/


// ASYNC/ AWAIT

async function getPokemon(pokemonName){
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`); // creates a promise to retrive res
    const data = await res.json(); // creates a promise to get the body as a JSON object
    return data;
}

const trainer = {
    name: "anthony",
    badges: ["fire", "water", "ice"],
    pokemon: [
        getPokemon("pikachu"),
        getPokemon("charizard"),
        getPokemon("ditto")
    ]
}


Promise.all(trainer.pokemon).then((data) => console.log(data));

// console.log(trainer.pokemon)










// const developer = {
//     name: "anthony",
//     occupation: "software engineer",
//     favoriteLanguage: "TypeScript"
// };

// function getName(dev){
//     return dev.name;
// }


// console.log(getName(developer));
// console.log("hello from the 2nd console.log")
