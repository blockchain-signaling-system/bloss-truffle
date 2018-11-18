const fs = require('fs');
var AutonomousSystem = artifacts.require("./AutonomousSystem.sol");

module.exports = function (deployer, network, accounts) {
  // deploy the proxy contract only
  deployer.deploy(AutonomousSystem);
  deployer.then(function () {
    // do not delete this line. It is used in the setup script for grepping the proxy's address.
    console.log("AutonomousSystem [" + network + "] contract is deployed at " + AutonomousSystem.address);
    fs.writeFile("./as400.txt", AutonomousSystem.address, function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("as400.txt contains the AS400 address");
    });
  });
};

