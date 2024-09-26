const random = require('getrandomjs');
const {anthony, stephanie} = require('../characters/game-character');

class Game {
    constructor() {
        this.server = new Array(300).fill(0);
    }


    // printServerInfo(){
    //     console.log(this.server);
    // }

    combat(player1, player2){
        // BASE CASE - when do we stop combat
        setTimeout(()=> {
            console.clear()

            if(player1.health <= 0){
                // stop
                return `${player2.name} wins.`
            }
            if(player2.health <= 0){
                return `${player1.name} wins.`
            }

            // recursive step
            const player2Damage = random(0,5); // 5
            const player1Damage = random(0,5); // 2
            console.log(`${player2.name} deals ${player1Damage}`);
            console.log(`${player1.name} deals ${player2Damage}`);

            player2.health -= player1Damage;
            player1.health -= player2Damage;

            // recursive call
            return this.combat(player1, player2);
        }, 1000)

    }


    /*

        p1 = {health: 20, level: 2}
        p2 = {health: 10, level 1}

        Game loop -
            loop 1 ->
                 p1 does x damage to p2
                 p2 does y damage to p1

                 p1 = {health: 15, level: 2}
                 p2 = {health 3, level: 1}



    */


}


const eastCoastServer = new Game();
const pstServer = new Game();
const japanServer = new Game();


eastCoastServer.combat(anthony, stephanie)


// eastCoastServer.printServerInfo()
