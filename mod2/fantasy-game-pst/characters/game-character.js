const {healerRole} = require('./roles');


class Character {
    constructor(name, role){
        this.name = name;
        this.role = role; // this is the Role class
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
console.log(stephanie)
