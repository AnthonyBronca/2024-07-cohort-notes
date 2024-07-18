const chai = require('chai');
const expect = chai.expect;

const {twoSum} = require('../problems/twoSum.js');


describe('twoSum()', () => {
  it("Should take in two numbers and return a sum", ()=> {

    const sum1 = twoSum(1,2); // 3
    const sum2 = twoSum(2, 2); // 4
    const sum3 = twoSum(100, 100); // 200
    const sum4 = twoSum(-10, 5); // -5

    expect(twoSum).to.not.be.undefined;
    expect(sum1).to.equal(3);
    expect(sum2).to.equal(4);
    expect(sum3).to.equal(200);
    expect(sum4).to.equal(-5);

  })
});
