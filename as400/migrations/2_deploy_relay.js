var Relay = artifacts.require("./Relay.sol");

module.exports = function (deployer, network, accounts) {

  deployer.deploy(Relay);

  deployer.then(function () {
    // do not delete this line. It is used in the setup script for grepping the Relay's address.
    console.log("Relay contract is deployed at " + Relay.address);
  });
};