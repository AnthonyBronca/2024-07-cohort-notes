// import occupations
const {gatherer, evil} = require("./roles/occupations");
const { juggernautHelmet, steelPlatedHelmet, HeadGear} = require("../gear/equipment/general-equipment");
const levelChart = require("./roles/levelChart");



class Character {
    constructor(name, occupations){
        this.name = name;
        this.occupations = occupations;
        this.level = 1;
        this.currentXp = 1;
        this.health = 10
        this.equipment = {
            head: null,
            body: "shirt",
            pants: "pants",
            feet: null,
            hands: null,
            mainHand: null,
            offHand: null,
            back: null
        }

        this.combat = null;
    }

    addGear(gear) {
        if(gear instanceof HeadGear){
            // check if we have the level required to wear the gear
            if(gear.levelRequirement < this.level){
                // error message
                // throw new TypeError("You're too weak")
            } else{
                this.equipment.head = gear;
            }
        }
    }

    login(){
        console.log(`${this.name}: Logged in at ${new Date()}`)
    }

    // instance method that will let us add occupations
    addOccupation(newOccupation){
        this.occupations.push(newOccupation);
    }

    levelUp() {
        this.level++;
        this.health += 10;
    }

    xpGainer(xpGathered) {
        this.currentXp += xpGathered
        if (this.currentXp >= levelChart[this.level + 1]) {
            this.levelUp();
        }
    }



}

const anthony = new Character("Anthony", [evil]);
const sam = new Character("Sam", [gatherer]);



anthony.login();
sam.login();
// console.log(anthony)


anthony.occupations[0].makeMoney(10);
anthony.addOccupation(gatherer);

anthony.occupations[0].xpGainer(200);
anthony.occupations[0].xpGainer(50);
anthony.occupations[0].xpGainer(10);
anthony.occupations[0].xpGainer(100);



anthony.xpGainer(200);

anthony.occupations[0].levelUp();
// anthony.addGear(juggernautHelmet)
anthony.addGear(steelPlatedHelmet)






// console.log(anthony)

module.exports = {anthony, sam};
