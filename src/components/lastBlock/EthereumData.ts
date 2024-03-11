import Web3 from "web3";

const infuraEndpoint = 'https://mainnet.infura.io/v3/e0e1732056954991a7d2b12391a220cd';

const web3 = new Web3(new Web3.providers.HttpProvider
    (infuraEndpoint) );

export const getLastBlockNumber = async () => {
    
   const blockNumber = await web3.eth.getBlockNumber();
  return blockNumber;
};




