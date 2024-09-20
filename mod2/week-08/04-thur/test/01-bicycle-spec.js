
const chai = require('chai');
const expect = chai.expect;


const {Bicycle} = require('../lecture2/bicycle.js');


describe("This is the title of the block of tests", ()=> {
    const anthonysBike = new Bicycle("Anthony");
    const samsBike = new Bicycle("Sam");

    it("This is 1 point within the block", ()=> {


        const actualResult = anthonysBike.pedal(5);
        const expectedResult = "Anthony Pedals for 5 minutes";

        expect(actualResult).to.eql(expectedResult);
    });

    it("This is another point within the block", ()=>{
        expect(()=> anthonysBike.getError()).to.throw(Error)
    })
})
