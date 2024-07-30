const chai = require('chai');
const expect = chai.expect;

let reverseString;
try {
    reverseString = require('../problems/02-reverseString').reverseString;
} catch (e) {
    console.log("Error: Function reverseString is not defined yet")
}



describe("Function reverseString(): ", ()=> {
    it("Should reverse an input", ()=> {
        let test1 = reverseString("hello");
        let test2 = reverseString("bye");
        let test3 = reverseString("racecar");
        let answer1 = "olleh";
        let answer2 = "eyb";
        let answer3 = "racecar";


        expect(test1).to.equal(answer1);
        expect(test2).to.equal(answer2);
        expect(test3).to.equal(answer3);
    });

    it("Should return the correct error message, when applicable: 'Did not pass in a valid string'", ()=> {
        let test1 = reverseString("hello");
        let answer1 = "olleh";

        let badTest1 = reverseString(1);
        let badAnswer1 = "Did not pass in a valid string";

        let badTest2 = reverseString("");
        let badAnswer2 = "Did not pass in a valid string";

        expect(test1).to.equal(answer1);
        expect(badTest1).to.equal(badAnswer1);
        expect(badTest2).to.equal(badAnswer2);
    })
})
