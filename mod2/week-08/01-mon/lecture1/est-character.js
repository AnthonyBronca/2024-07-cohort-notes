// import
// acc1 -> Zelda
// acc2 -> Mario
const {acc1, acc2} = require("./est-adventure");


class Character {
    constructor(name, race, faction) {
        this.name = name;
        this.race = race;
        this.faction = faction;
        this.healthPoints = 20;
        this.level = 3;

    }
    // B

    levelUp(suggestedLevel){
        // increment the level variable by 1
        if(suggestedLevel){
            this.level += suggestedLevel;
        } else{
            this.level++;
        }
    }

    doubleXp(){
        this.level += 2;
    }

}


const anthony = new Character("Anthony", "Human", "Warrior");
const sam = new Character("Sam", "Snow Elf", "Mage");
const alexi = new Character("Alexi", "High Elf", "Mage");

acc1.addToCharactersList(anthony);
acc1.addToCharactersList(sam);

anthony.levelUp(10);
// anthony.doubleXp();
// anthony.levelUp();
// anthony.levelUp();
// anthony.levelUp();
// anthony.levelUp();

console.log(acc1);


// console.log(anthony);
// console.log(sam);
// console.log(alexi);
