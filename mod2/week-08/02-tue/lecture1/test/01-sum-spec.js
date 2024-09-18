// TDD - RED - WRITE TESTS AND GET THEM TO FAIL

// GENERAL STRUCTURE OF OUR TEST FILES ---

// TEST IMPORTS
// DO NOT TOUCH THIS - THIS IS BOILERPLATE
const chai = require('chai');
const expect = chai.expect;

// FILE/FUNCTIONALITY IMPORTS - WE WILL NEED THIS FOR THE TEST
const getSum = require('../problems/01-sum.js'); // - notice where the folder is, the file is, and the name of function/how to unpackage it

// DESRIBE BLOCKS
describe("Function getSum", ()=> {
    // IT BLOCKS
    it("adds things together and returns the sum", ()=> {
        // tests
        const actualResult1 = getSum(1, 1); // 2
        const expectedResult1 = 2;
        const actualResult2 = getSum(10,15); // 25
        const expectedResult2 = 25;


        expect(actualResult1).to.eql(expectedResult1);
        expect(actualResult2).to.eql(expectedResult2);
        expect(getSum(5,4)).to.eql(9);
    });

    it("returns an error message if bad data is passed in", ()=> {

        const actualResult = getSum([], []);
        const expectedResult = "You did not pass in valid data.";

        expect(actualResult).to.eql(expectedResult);
    })

})
