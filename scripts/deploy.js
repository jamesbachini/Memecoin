const hre = require("hardhat");

async function main() {
  
  const Meme = await hre.ethers.getContractFactory("Meme");
  const meme = await Meme.deploy();
  await meme.deployed();
  await meme.addLiquidity();
  console.log(
    `Memecoin deployed to: ${meme.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
