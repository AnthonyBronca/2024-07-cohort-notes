

const pokemon = async() => {

    const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const ditto = await res.json();










    // console.log(Object.keys(ditto));
    console.log(ditto.moves[0].move.url);


}


pokemon();
