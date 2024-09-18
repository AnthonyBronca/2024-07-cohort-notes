// RED - write some test specs so that we have a bunch of red xs

// LIBRARY IMPORTS - BOILERPLATE
const chai = require('chai');
const expect = chai.expect;

// FUNCTION/FILE IMPORTS - you will have to do something with this

const mySum = require('../problems/01-mySum.js');


// DESCRIPTION - title
describe("Function mySum", ()=> {
    // IT - point
    it("should return the sum of 2 numbers", ()=> {

        const actualResult = mySum(1,1);
        const expectedResult = 2;
        const actualResult2 = mySum(10,15);
        const expectedResult2 = 25;

        expect(actualResult).to.eql(expectedResult);
        expect(actualResult2).to.eql(expectedResult2);
        expect(mySum(10,5)).to.eql(15);
    });


    it("should return an error message when bad data is passed", ()=>{

        const actualResult = mySum([], []);
        const expectedResult = "You did not pass in valid data.";

        expect(mySum(3,5)).to.eql(8);
        expect(actualResult).to.eql(expectedResult);



    })

})
        // tests
