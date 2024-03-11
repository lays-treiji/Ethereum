import React, { useState } from 'react'
import Web3 from 'web3';

const GetLatest : React.FC = () => {
    const [blockNumber, setBlockNumber] = useState<any>();

    const infuraApiKey = 'e0e1732056954991a7d2b12391a220cd';
    const infuraEndpoint = `https://mainnet.infura.io/v3/${infuraApiKey}`;

    const web3 = new Web3(new Web3.providers.HttpProvider(infuraEndpoint));

    async function getLatestBlockNumber() {
          const blockNumber = await web3.eth.getBlockNumber();
          console.log('Latest Block Number:', blockNumber);
          setBlockNumber(blockNumber);
      }
      
      const lastBlock = getLatestBlockNumber();
    return (
        <div>
               <h3>get latest</h3> 
              <p>{blockNumber}</p>         
        </div>

    )
}

export default GetLatest
