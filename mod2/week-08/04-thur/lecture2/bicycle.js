

class Bicycle {
    constructor(name){
        this.name = name;
    }

    pedal(){
        return `${this.name} Pedals for 5 minutes`
    }

    getError(){
        throw new Error();
    }
}

module.exports = {Bicycle}
