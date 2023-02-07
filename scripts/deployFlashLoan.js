const hre = require("hardhat");

async function main() {

  const FlashLoan = await hre.ethers.getContractFactory("Flashloan");
  const flashLoan = await FlashLoan.deploy('0xC911B590248d127aD18546B186cC6B324e99F02c');

  await flashLoan.deployed();
  console.log('FlashLoan deployed successfully', flashLoan.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
