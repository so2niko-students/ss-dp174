export const test1 = function testPowFunc(assert) {
    describe("pow", function() {
    it("возводит в n-ю степень", function() {
      chai.assert.equal(Math.pow(2, 3), 8);
    });
  });
}
