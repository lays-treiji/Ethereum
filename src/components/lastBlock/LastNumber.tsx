import React, { useEffect, useState } from 'react';
import { getLastBlockNumber } from "./EthereumData";


const LastNumber: React.FC = () => {
    const [blockNumber, setBlockNumber] = useState<any>();

    useEffect(() => {
        const fetchData = async () => {
          const lastBlockNumber = await getLastBlockNumber();
          setBlockNumber(lastBlockNumber);
        };
    
        fetchData();
      }, []);

 return <div>
     <h1 >Last Block Number of Ethereum Mainnet is:</h1>
      
    <p>{blockNumber!=null?` the last block Number ${blockNumber}` :'Loading'}</p>
  </div>;
};

export default LastNumber;