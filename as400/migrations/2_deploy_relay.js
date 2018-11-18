const fs = require('fs');
var Relay = artifacts.require("./Relay.sol");

module.exports = function (deployer, network, accounts) {

  deployer.deploy(Relay);

  deployer.then(function () {
    // do not delete this line. It is used in the setup script for grepping the Relay's address.
    console.log("Relay contract is deployed at " + Relay.address);
    fs.writeFile("./relay.txt", Relay.address, function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("relay.txt contains the relay address");
    });
  });
};