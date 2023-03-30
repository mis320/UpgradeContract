// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const Lock = await hre.ethers.getContractFactory("Lock");
  const lock = await Lock.deploy();
  await lock.deployed();
  console.log(
    `deployed lock to ${lock.address}`
  );
  const Lock2 = await hre.ethers.getContractFactory("Lock2");
  const lock2 = await Lock2.deploy();
  await lock2.deployed();
  console.log(
    `deployed lock2 to ${lock2.address}`
  );
  const ProxyAdmin = await hre.ethers.getContractFactory("ProxyAdmin");
  const ProxyAdmin_ = await ProxyAdmin.deploy();
  await ProxyAdmin_.deployed();
  console.log(
    `deployed ProxyAdmin_ to ${ProxyAdmin_.address}`
  );

  const Proxy = await hre.ethers.getContractFactory("TransparentUpgradeableProxy");
  const Proxy_ = await Proxy.deploy(lock.address,ProxyAdmin_.address,"0x");
  await Proxy_.deployed();
  console.log(
    `deployed Proxy_ to ${Proxy_.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
