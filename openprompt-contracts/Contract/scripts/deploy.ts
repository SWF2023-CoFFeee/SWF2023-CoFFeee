import hre, { ethers } from 'hardhat';
import CoffeeeArtifact from '../artifacts/contracts/CoffeeeNFT.sol/CoffeeeNFT.json';
import { getGasOption } from './utils/gas';
import * as fs from 'fs';

async function main() {
const [admin] = await hre.ethers.getSigners();

const chainId = hre.network.config.chainId || 0;

const factory = await ethers.getContractFactory(
    CoffeeeArtifact.contractName,
);

const contract = await factory.deploy(
    'Coffeee',
    'CFEE',
    getGasOption(chainId),
);
  const receipt = await contract.deploymentTransaction();
  const address = await contract.getAddress();

const deployedContract = {
    address: address,
    blockNumber: receipt?.blockNumber,
    chainId: hre.network.config.chainId,
    abi: CoffeeeArtifact.abi,
};

const filename = __dirname + `/coffeee.deployed.json`;

const deployedContractJson = JSON.stringify(deployedContract, null, 2);
fs.writeFileSync(filename, deployedContractJson, {
    flag: 'w',
    encoding: 'utf8',
});

console.log(deployedContractJson);
}

main()
.then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
});

