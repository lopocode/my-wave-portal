require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks:{
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/aBhVwit49-1KOAVCbVazKhLhmG0yFiOK",
      accounts: ["439ba5397a8c2418748d0922f89d000cc3bbf881123309a1f41c2f9cfa336a89"],
    },
  },
};
