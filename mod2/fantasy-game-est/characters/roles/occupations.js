const levelChart = require("./levelChart")


class Occupation {
    constructor(title, pay, listOfResponbilities, currentXp = 1) {
        this.title = title;
        this.pay = pay;
        this.listOfResponbilities = listOfResponbilities;
        this.currentXp = currentXp;
        this.level = 1;
    }

    // functionality
    makeMoney(salary){
        this.pay += salary;
    }

    levelUp(){
        this.level ++;
    }

    // xpGathered -> 200
    xpGainer(xpGathered){
        this.currentXp += xpGathered
        //     200                  150
        if(this.currentXp >= levelChart[this.level + 1]){
            this.levelUp();
        }
    }




}




const gatherResponsibilites = [
    "The Gatherer harvests crops and stuff",
    "Must store crops and stuff to gain xp and help the community"
];


const evilResponsibilities = [
    "The Evil Occupation must pillage farms",
    "Steal from the community storage for self benefit and hurt the community"
];


const gatherer = new Occupation("Gatherer", 3, gatherResponsibilites);
const evil = new Occupation("Evil", 7, evilResponsibilities);


// export the occupations ->


module.exports = {gatherer,evil};



// console.log(gatherer);
// console.log(evil);
