
const levelXpRequirements = require('./levels');

class Role {
    constructor(title, skill){
        this.title = title;
        this.skill = skill;
        this.level = 1;
        this.xp = 1;
    }

    xpIncrease(xpReward){
        this.xp += xpReward;

        if(levelXpRequirements[this.level + 1] <= this.xp){
            this.levelUp()
        }
    }

    levelUp(){
            this.level++;
    }


}


const healerRole = new Role("Healer", "Craft Weapons")


module.exports = {healerRole};
