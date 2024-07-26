const chai = require('chai');
const expect = chai.expect;

const {
    paid,
    balanceDue
} = require('../problems/01-banking')


describe("01-banking.js: ", ()=> {
    const startingPaid = ["sam", "anthony", "gabe"];
    const endingPaid = ['sam', 'alexi', 'gabe'];
    const startingBalanceDue = ["zaviar"];
    const endingBalanceDue = ['zaviar', 'anthony'];

    it('should have two variables:', ()=> {
        expect(paid).to.be.an.instanceOf(Array);
        expect(balanceDue).to.be.an.instanceOf(Array);
    });

    it("paid should have ['sam', 'alexi', 'gabe']: ", ()=> {
        expect(paid.includes("alexi")).to.be.true;
        expect(paid.includes("sam")).to.be.true;
        expect(paid.includes("gabe")).to.be.true;
    });
    it("balanceDue should have ['zaviar', 'anthony']: ", ()=> {
        expect(balanceDue.includes("zaviar")).to.be.true;
        expect(balanceDue.includes("anthony")).to.be.true;
    });
    it("paid should not have 'anthony' after changes", ()=> {
        expect(paid.includes('anthony')).to.be.false;
    });
    it("should have names in correct order: ", ()=> {
        expect(paid[0]).to.equal("sam");
        expect(paid[1]).to.equal("alexi");
        expect(paid[2]).to.equal("gabe");
    })


})
