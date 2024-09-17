//unbox -> import

const {anthony, sam} = require("./person");

class Character {
    constructor(username, race, faction){
        this.username = username;
        this.race = race;
        this.faction = faction;
    }
}

const warlord1 = new Character("WarLord1", "Elf", "Barbarian Berserker");
const darkwizard = new Character("DarkWizard", "Human", "Dark Wizard");
const penguinluv = new Character("PenguinLuv", "Fairy", "Loving Fairy");

// console.log(warlord1, darkwizard, penguinluv)
// add warlord1 and darkwizrd to the anthony object
anthony.addCharacter(warlord1);
anthony.addCharacter(darkwizard);
sam.addCharacter(penguinluv);

console.log(anthony);
console.log(sam);
