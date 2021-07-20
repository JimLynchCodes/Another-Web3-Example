const Foobar = artifacts.require("Foobar");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Foobar", function (/* accounts */) {
  it("should assert true", async function () {
    await Foobar.deployed();
    return assert.isTrue(true);
  });
});
