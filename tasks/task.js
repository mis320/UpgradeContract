const config = require("hardhat/config")

const LockJ = require("../artifacts/contracts/Lock.sol/Lock.json")
const upgradeJ = require("../artifacts/contracts/ProxyAdmin.sol/ProxyAdmin.json")
config.task("test", "test", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();
    const sing = await hre.ethers.getSigner();
    for (const account of accounts) {
        console.log(account.address);
    }
    // //调用未升级的合约
    // const Contract = new hre.ethers.Contract("0xBF64C9cd50a45a0958f6b705058b3129A9dDe214", LockJ.abi, sing)
    // let balance = await Contract.balance()
    // console.log("balance", balance.toString());
    //         //初始化一次init
    // const init = await Contract.init()
    // console.log("init", init);
    // balance = await Contract.balance()
    // console.log("balance", balance.toString());
    // const deposit = await Contract.deposit(996)
    // console.log("deposit", deposit);
    // balance = await Contract.balance()
    // console.log("balance", balance.toString());
    // const withdraw = await Contract.withdraw()
    // console.log("withdraw", withdraw);
    // balance = await Contract.balance()
    // console.log("balance", balance.toString());

    // //合约升级

    // const Contract2 = new hre.ethers.Contract("0x24960884aDFe8aB4aE89fDe9B4A5A1aA0f2bccC9", upgradeJ.abi, sing)
    // const upgrade = await Contract2.upgrade("0xBF64C9cd50a45a0958f6b705058b3129A9dDe214", "0x4CAFEa0f04a581ED48A5b221fF6cb0F967C2d10D")
    // console.log("upgrade", upgrade);

    //调用升级的合约
    const Contract3 = new hre.ethers.Contract("0xBF64C9cd50a45a0958f6b705058b3129A9dDe214", LockJ.abi, sing)
    const balance1 = await Contract3.balance()
    console.log("balance 1", balance1.toString());

    const deposit2 = await Contract3.deposit(996)
    console.log("deposit2", 0);
    const balance22 = await Contract3.balance()
    console.log("balance  2", balance22.toString());
    const withdraw2 = await Contract3.withdraw()
    console.log("withdraw2", 0);
    const balance3 = await Contract3.balance()
    console.log("balance  3", balance3.toString());
    console.log("end");
});