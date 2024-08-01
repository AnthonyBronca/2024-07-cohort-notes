const chai = require("chai");
const expect = chai.expect;

let pigLatin
try {
      pigLatin = require("../problems/03-pigLatin-spec").pigLatin
} catch(e) {
      console.log("Error: Function pigLatin is not defined yet")
}


describe("Function pigLatin(): ", () => {
      it("apple should turn into appleyay", () => {
            const latinized = pigLatin("apple")
            expect(latinized).to.eql("appleyay")
      })
      it("eagle should turn into eagleyay", () => {
            const latinized = pigLatin("eagle")
            expect(latinized).to.eql("eagleyay")
      })
      it("cat should turn into atcay", () => {
            const latinized = pigLatin("cat")
            expect(latinized).to.eql("atcay")
      })
      it("school should turn into oolschay", () => {
            const latinized = pigLatin("school")
            expect(latinized).to.eql("oolschay")
      })
      it("banana should turn into ananabay", () => {
            const latinized = pigLatin("banana")
            expect(latinized).to.eql("ananabay")
      })
      it("rhythm should turn into rhythmay", () => {
            const latinized = pigLatin("rhythm")
            expect(latinized).to.eql("rhythmay")
      })
      it("unhappy should turn into unhappyay", () => {
            const latinized = pigLatin("unhappy")
            expect(latinized).to.eql("unhappyay")
      })
})