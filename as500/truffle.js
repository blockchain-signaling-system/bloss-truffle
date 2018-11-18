module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id,
      gas: 4300000,
      gasPrice: 22000000000
    },
    as400: {
      host: "172.10.15.17",
      port: 8545,
      network_id: 21, // Match any network id,
      gas: 4300000,
      gasPrice: 22000000000
    },
    as500: {
      host: "172.10.15.18",
      port: 8545,
      network_id: 21, // Match any network id,
      gas: 4300000,
      gasPrice: 22000000000
    },
    as600: {
      host: "172.10.15.19",
      port: 8545,
      network_id: 21, // Match any network id,
      gas: 4300000,
      gasPrice: 22000000000
    }
  }
};
