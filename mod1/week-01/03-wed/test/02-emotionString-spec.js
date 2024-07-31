const chai = require('chai');
const expect = chai.expect;


let emotionString;
try {
    emotionString = require("../problems/02-emotionString").emotionString
    if(!emotionString){
        throw new Error("Error: Function emotionString is not defined")
    }
} catch (error) {
    console.error(error.message);
}


describe('Function emotionString(): ', ()=> {
    it("Should add the correct emotion", ()=> {
        let emotion1 = "!!!";
        let emotion2 = "💙";
        let emotion3 = "😠";
        let emotion4 = "...";

        let ex1 = emotionString("I can code", emotion1); // "I can code !!!"
        let ex2 = emotionString("JavaScript is love", emotion2); // JavaScript is love 💙
        let ex3 = emotionString("I am hungry!", emotion3); // I am hungry! 😠
        let ex4 = emotionString("Will my test specs pass", emotion4); // "Will my test specs pass ..."

        expect(ex1).to.equal("I can code !!!");
        expect(ex2).to.equal("JavaScript is love 💙");
        expect(ex3).to.equal("I am hungry! 😠");
        expect(ex4).to.equal("Will my test specs pass ...");
    });

    it("Should return the correct string when no emotion is passed", ()=> {
        let ex5 = emotionString("This should fail!"); // No emotion passed in.
        expect(ex5).to.equal("No emotion passed in.");

    });
})
