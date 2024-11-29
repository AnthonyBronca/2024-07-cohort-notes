
// allows you to get information/send information to the internet

/*
FETCH RETURNS A PROMISE
 - PENDING
 - FULLFILLED
 - REJECTED

*/


// const data = fetch("https://pokeapi.co/api/v2/pokemon/ditto"); //async code -> skipped


// .THEN CHAINING
const ditto = fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((res) => res.json())
    .then((data) => data);


// console.log(ditto);

// console.log(data); // recognized pending,
//


// ASYNC/AWAIT
async function getPokemon(pokemonName){
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = await res.json(); //.json() -> created a 2nd promise
    return data;
};


// getPokemon("ditto");


const trainer = {
    name: "Anthony",
    gymBadges: ["water", "earth", "fire"],
    pokemon: [
        getPokemon("ditto"),
        getPokemon("pikachu"),
        getPokemon("charizard"),
    ]
}

Promise.all(trainer.pokemon).then((data) => console.log(data));
