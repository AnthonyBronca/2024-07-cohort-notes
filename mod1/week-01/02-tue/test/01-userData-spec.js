const chai = require('chai');
const expect = chai.expect;

let userData;
try{
    userData = require('../problems/01-userData').userData;
} catch(e){
    console.log("Error: Function userData is not defined yet")
}



describe("Function userData: ", ()=> {

    let testArray;
    let testArray2;
    beforeEach(()=> {
        testArray = ["Anthony", "Alan", "Sam", "Tristan", "Gabe", "Alexi", "Kate", "Edward", "Zaviar", "Will"];
        testArray2 = ["Bob", "Bill", "Joe"];
    });


    it("Should remove the passed in name from the passed in array", ()=> {
        let testResult1 = userData(testArray, "Alexi");
        let testResult2 = userData(testArray, "Sam");
        let testResult3 = userData(testArray, "Charles");
        let testAnswer1 = ["Anthony", "Alan", "Sam", "Tristan", "Gabe", "Kate", "Edward", "Zaviar", "Will"];
        let testAnswer2 = ["Anthony", "Alan", "Tristan", "Gabe", "Alexi", "Kate", "Edward", "Zaviar", "Will"];
        let testAnswer3 = -1

        let testResArr1 = userData(testArray2, "Bob");
        let testResArr2 = userData(testArray2, "Anthony");
        let testResArr3 = userData(testArray2, "Bill");
        let testRes1 = ["Bill", "Joe"];
        let testRes2 = -1
        let testRes3 = ["Bob", "Joe"];

        expect(testResult1).to.eql(testAnswer1);
        expect(testResult2).to.eql(testAnswer2);
        expect(testResult3).to.eql(testAnswer3);

        expect(testResArr1).to.eql(testRes1);
        expect(testResArr2).to.eql(testRes2);
        expect(testResArr3).to.eql(testRes3);
    });

    it("Should not modify the input array", ()=> {
        userData(testArray, "Alexi");
        userData(testArray, "Sam");
        userData(testArray2, "Bob");
        userData(testArray2, "Bill");


        expect(testArray.includes("Alexi")).to.be.true;
        expect(testArray.includes("Sam")).to.be.true;
        expect(testArray2.includes("Bob")).to.be.true;
        expect(testArray2.includes("Bill")).to.be.true;
    });

    it("Should return a copy of the input array", ()=> {
        let res1 = userData(testArray, "Alexi");
        let res2 = userData(testArray, "Sam");
        let res3 = userData(testArray2, "Bob");
        let res4 = userData(testArray2, "Bill");

        expect(res1).to.not.equal(testArray);
        expect(res2).to.not.equal(testArray);
        expect(res3).to.not.equal(testArray2);
        expect(res4).to.not.equal(testArray2);

    })



})
