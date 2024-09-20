const {healerRole} = require('./roles');
const {headBandOfTheOwl, HeadGear, basicHeadPiece, glovesOfTheFallenChampion, GloveGear} = require("../gear/equipment/general-equipment");
const levelXpRequirements = require('./roles/levels');



class Character {
    constructor(name, role){
        this.name = name;
        this.role = role; // this is the Role class
        this.level = 1;
        this.xp = 1;
        this.health = 10;
        this.equipment = {
            head: null,
            torso: "shirt",
            legs: "pants",
            feet: null,
            gloves: null,
            back: "backpack",
            mainHand: null,
            offHand: null,
            accesories: {
                necklage: null,
                rightHandRing: null,
                leftHandRing: null
            }
        }
    }

    xpIncrease(xpReward) {
        this.xp += xpReward;

        if(levelXpRequirements[this.level + 1] <= this.xp) {
            this.levelUp()
        }
    }

    levelUp() {
        this.level++;
        this.health += 10;
    }

    checkGearLevelRequirements(gear){
        if (this.level >= gear.levelRequirement) {
            this.equipment.head = gear
        } else {
            console.log(`You must be level ${gear.levelRequirement} to equip: ${gear.name}`);
        }
    }

    // the gear passed in has to be of the Gear class
    addGear(gear){
        if(gear instanceof HeadGear){
            // we need to check if this player has the required level of the equipment to wear it
           this.checkGearLevelRequirements(gear);
        } else if(gear instanceof GloveGear){
            this.checkGearLevelRequirements(gear)
        } else {
            // have some error
            throw new TypeError("Get that idea out of your head");
        }
    }

    login(){
        console.log(`${this.name} Logged in at: ${new Date()}`);
    }




}


const anthony = new Character("Anthony", healerRole);
const stephanie = new Character('Stephanie', healerRole);


// anthony.login();
console.log(stephanie)
stephanie.role.xpIncrease(149);
stephanie.role.xpIncrease(150);
stephanie.addGear(basicHeadPiece)
stephanie.xpIncrease(600)
stephanie.levelUp();
stephanie.addGear(headBandOfTheOwl)
stephanie.addGear(glovesOfTheFallenChampion)
console.log(stephanie)

module.exports = {anthony, stephanie};
