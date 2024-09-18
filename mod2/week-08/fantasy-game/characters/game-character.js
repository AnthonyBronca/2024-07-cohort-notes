// import occupations
const {gatherer, evil} = require("./roles/occupations");



class Character {
    constructor(name, occupations){
        this.name = name;
        this.occupations = occupations;
    }

    login(){
        console.log(`${this.name}: Logged in at ${new Date()}`)
    }


    // instance method that will let us add occupations
    addOccupation(newOccupation){
        this.occupations.push(newOccupation);
    }

}

const anthony = new Character("Anthony", [evil]);

anthony.login();

// console.log(anthony)


anthony.occupations[0].makeMoney(10);
anthony.addOccupation(gatherer);

console.log(anthony)
