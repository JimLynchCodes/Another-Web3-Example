var Foobar = artifacts.require("./Foobar.sol");

module.exports = function(deployer) {
  deployer.deploy(Foobar);
};
