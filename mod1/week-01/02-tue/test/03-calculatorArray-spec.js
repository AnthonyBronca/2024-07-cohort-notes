const chai = require("chai");
const expect = chai.expect;

let calculatorArray;
try {
	calculatorArray = require("../problems/03-calculatorArray").calculatorArray;
} catch (e) {
	console.log("Error: Function calculatorArray is not defined yet");
}

describe("Function calculatorArray: ", () => {
	it(`Addition with [1, 6, true, -12] should equal -5`, () => {
		const res = calculatorArray([1, 6, true, -12], "addition");
		expect(res).to.eql(-5);
	});
	it(`Addition with [1, "9", 13] should equal 14`, () => {
		const res = calculatorArray([1, "9", 13], "addition");
		expect(res).to.eql(14);
	});
	it(`Subtraction with [19, -33, 7] should equal 45`, () => {
		const res = calculatorArray([19, -33, 7], "subtraction");
		expect(res).to.eql(45);
	});
	it(`Division with ["0", "9", 10, 5, 2] should equal 1`, () => {
		const res = calculatorArray(["0", "9", 10, 5, 2], "division");
		expect(res).to.eql(1);
	});
	it(`Division with [0, 10, 99] should equal 0`, () => {
		const res = calculatorArray([0, 10, 99], "division");
		expect(res).to.eql(0);
	});
	it(`Multiplication with [2, 4, null] should equal 8`, () => {
		const res = calculatorArray([2, 4, null], "multiplication");
		expect(res).to.eql(8);
	});
	it(`Multiplication with [5, 3, 7] should equal 105`, () => {
		const res = calculatorArray([5, 3, 7], "multiplication");
		expect(res).to.eql(105);
	});
	it(`Multiplication with ["9", "8", 2] should equal 2`, () => {
		const res = calculatorArray(["9", "8", 2], "multiplication");
		expect(res).to.eql(2);
	});
	it(`Modulo with [1, 2, 3, 4] should equal "Did not pass in a valid operation."`, () => {
		const res = calculatorArray([1, 6, true, -12], "modulo");
		expect(res).to.eql("Did not pass in a valid operation.");
	});
	it(`Addition with ["1", "2", "3", "4"] should equal "Did not pass in any valid nums."`, () => {
		const res = calculatorArray(["1", "2", "3", "4"], "addition");
		expect(res).to.eql("Did not pass in any valid nums.");
	});


});
