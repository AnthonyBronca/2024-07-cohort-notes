



// const anthonyObj = {
//    name: "anthony",
//    hairColor: "brown",
//    age: 30
// }


// console.log(anthonyObj["age"])


// const arr = [1,2,3];


// console.table(arr[0]);


// const myMovieTheatre = {
//     name: "Anthony's Awesome Movie Theatre",
//     occupancy: 200,
//     movies: ["Dead Pool 3", "Avengers: End game", "Dispicable Me 2"]
// }

// iterate over objects

// -- methods to get array of all keys/values
// console.log(Object.keys(myMovieTheatre), "     Keys");
// console.log(Object.values(myMovieTheatre), "      Values");
// console.log(Object.entries(myMovieTheatre)[2][1], "entries")




// --- for in loop method --

// let keys = [];
// let values = [];

// for(let key in myMovieTheatre){
//     let val = myMovieTheatre[key];
//     keys.push(key);
//     values.push(val);
// }

// console.log(keys);
// console.log(values);


// to add key value pairs

// dot notation


// let myVariable = "name";
// console.log(myMovieTheatre[myVariable]);



// myMovieTheatre.student = "Corey"




// myMovieTheatre["student"] = "Tina";

// console.log(myMovieTheatre)


const spiderman = {
    name: "peter parker",
    heroName: "spider-man",
    theme: "spiders",
    age: 20,
    colors: ["red", "blue", "white"],
    powers: {
        wallClimbing: {
            description: "Able to stick to walls like a spider",
            cooldownPeriod: 100
        },
        spideySense: {
            description : "Able to feel danger before it happens",
            cooldownPeriod: Infinity
        },
        webShooting: {
            description: "Can shoot spider webs from his wrists",
            cooldownPeriod: 2
        }
    }
};

// console.log(spiderman.powers)

// console.log(spiderman.colors);
