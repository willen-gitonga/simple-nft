const { ethers } = require("hardhat");

async function main(){
   /*
A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
so nftContract here is a factory for instances of our GameItem contract.
*/
const nftContract = await ethers.getContractFactory("GameItem");
//deploying the contract 
const deployedNFTContract = await nftContract.deploy();
//wait for the contract to deploy 
await deployedNFTContract.deployed();
//print address of the deployed contract 
console.log("NFT Contract Address:", deployedNFTContract.address);

}
//calling main function and error catching 
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });