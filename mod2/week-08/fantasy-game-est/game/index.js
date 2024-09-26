const random = require('getrandomjs');

const myRandom = () => {
    return random(0, 5)
}

const {anthony, sam} = require('../characters/game-character');

class Game {
    constructor(){
        this.server = [];
    }

    printServerCapacity(){
        console.log(this.server)
        console.log(this.server.length)
    }

    addToServer(){
        this.server.push(1);
    }

    /*

        char2 {health: 20, level 2}
        char1 {health: 10, level 1}

        first loop ->
            char 2 does 2dmg -> char 1 health -> 8
            char 1 does 5dmg -> char 2 health -> 15



    */

   // keep doing damage, until one or both characters reach 0 health

    static getRandomDamage(){
        return Math.floor(Math.random() * (5 - 1 + 1) + 1);
    }

    combat(char1, char2){


        // BASE CASE
        if(char1.health === 0){
            console.log("we are here")
            return `${char2.name} wins.`
        }

        if(char2.health === 0){
            console.log("we are here")
            return `${char1.name} wins.`
        }
        // recursive case
        const char2Damage = Game.getRandomDamage(); // # between 0 - 5
        const char1Damage = Game.getRandomDamage(); // # between 0 - 5

        char1.health -= char2Damage; // recursive step
        char2.health -= char1Damage; // recursive step

        // console.log(char1)
        // return this.combat(char1)
        return this.combat(char1, char2)

    }


}

const eastServer = new Game();

const eastCoastCombat = eastServer.combat.bind()

anthony.combat = eastCoastCombat;
// console.log(anthony.combat.call(anthony, anthony, sam))

// anthony.combat(anthony, sam);


// console.log(eastServer.combat(anthony, sam))
