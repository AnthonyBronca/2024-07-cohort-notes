const chai = require('chai');
const expect = chai.expect;

let removeVowels;
try {
    removeVowels = require('../problems/01-removeVowels.js').removeVowels;
} catch (error) {
    console.log("Error: Function removeVowels is not defined");
}

describe("Function removeVowels", ()=> {

})
