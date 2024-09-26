
class Gear {
    constructor(name, description){
        this.name = name;
        this.description = description;
        this.durability = 100;
    }
}


class HeadGear extends Gear {
    constructor(name, description, material, levelRequirement){
        super(name, description)
        this.material = material;
        this.levelRequirement = levelRequirement;
    }
}

const juggernautHelmet = new HeadGear(
    "Juggernaut Kinda Helmet",
    "This is a cheat helmet lol",
    "leather",
    1
);

const steelPlatedHelmet = new HeadGear(
    "Steel Plate Helmet",
    "Full face helmet with a sleek finish",
    "steel",
    3
);




module.exports = {HeadGear, juggernautHelmet, steelPlatedHelmet};
