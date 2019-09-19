export const test2 = function testPowFunc(assert) {
    describe("pow", function() {
    it("возводит 3 в 4-ю степень", function() {
      assert.equal(Math.pow(3, 4), 81);
      
    });
  });
}
