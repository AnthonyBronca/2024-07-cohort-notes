const chai = require('chai');
const expect = chai.expect;


const {isFourteen} = require('../problems/isFourteen.js');

describe("isFourteen()", ()=> {
    it("Should check if the passed in number is 14", ()=> {
        const fourteen = isFourteen(14); // true;
        const ten = isFourteen(10); // false;
        const negFourteen = isFourteen(-14); // false;
        const stringFourteen = isFourteen("14"); /// false;

        expect(fourteen).to.be.true;
        expect(ten).to.be.false;
        expect(negFourteen).to.be.false;
        expect(stringFourteen).to.be.false;
    })
})
