const chai = require('chai');
const expect = chai.expect;

let removeVowels;
try {
    removeVowels = require('../problems/01-removeVowels.js').removeVowels;
} catch (error) {
    console.log("Error: Function removeVowels is not defined");
}

describe("Function removeVowels", ()=> {
    it("Should properly remove vowels", ()=> {
        const example1 = removeVowels("Hello");
        const example2 = removeVowels("GOOD bye");
        const example3 = removeVowels("TRY");
        const example4 = removeVowels("aaaaa");

        const answer1 = "Hll";
        const answer2 = "GD by";
        const answer3 = "TRY";
        const answer4 = "";


        expect(example1).to.equal(answer1);
        expect(example2).to.equal(answer2);
        expect(example3).to.equal(answer3);
        expect(example4).to.equal(answer4);

    })

})
