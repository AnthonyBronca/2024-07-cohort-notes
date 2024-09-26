/*
rarietyLevel can be: uncommon, rare, epic, and legendary

*/

class Gear {
    constructor(name, description, rarietyLevel, levelRequirement){
        this.name = name;
        this.description = description;
        this.durability = 0;
        this.rarietyLevel = rarietyLevel;
        this.levelRequirement = levelRequirement;
    }
}


class HeadGear extends Gear {
    constructor(name, description, material, rarietyLevel, levelRequirement){
        super(name, description, rarietyLevel,levelRequirement)
        this.material = material;
    }
}

class GloveGear extends Gear {
    constructor(name, description, rarietyLevel, levelRequirement, material){
        super(name, description, rarietyLevel, levelRequirement)
        this.material = material;
    }
}



const headBandOfTheOwl = new HeadGear(
    "Headband of the Owl",
    "Gives +3 to healing stats when equipped",
    "cloth",
    "legendary",
    3
)
const basicHeadPiece = new HeadGear(
    "Basic Head Piece",
    "This does nothing",
    "cloth",
    "uncommon",
    1
)

const glovesOfTheFallenChampion = new GloveGear(
    "Gloves of the Fallen Champion",
    "This item is cursed, you will gain +1000 to healing stats but you take on -500 to all other stats. This item can never be unequipped",
    "legendary",
    1,
    "cloth"
)


module.exports = {
    headBandOfTheOwl,
    basicHeadPiece,
    HeadGear,
    glovesOfTheFallenChampion,
    GloveGear
};
