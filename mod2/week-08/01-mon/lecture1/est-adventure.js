
// PascalCase
// camelCase

class Account {

    // accountCount = 0
    // classes have a built function that run once on creation
    constructor(username, password){
        this.username = username;
        this.password = password;
        this.charactersList = [];


    }

    // instance method
    changeUserName(newName){
        this.username = newName;
    }

    addToCharactersList(char){
        this.charactersList.push(char);
    }

    // static class
    // static updateCount(){
    //     Account.accountCount++;
    // }


}

// creation of the objects using our class (factory)
const acc1 = new Account("Zelda", "link123");
// Account.updateCount();
const acc2 = new Account("Mario", "peachiscool");

// console.log(acc1)
// console.log(acc2)





// acc2.changeUserName("Luigi")

// acc2.password = "PeachIsAwesome";
// console.log(acc2)
// console.log(Account);




// const acc3 = {
//     username: "bowser",
//     passwsord: "123123"
// }

// acc3.username = "Bowser"

// console.log(acc3)

// exporting the accouting
module.exports = {acc2, acc1};
// module.exports = acc2;

// module.exports = {tesExample1};
