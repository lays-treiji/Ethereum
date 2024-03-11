import React, { useEffect, useState } from 'react'
import Web3 from 'web3';

const ReadBalance :React.FC= () => {

    const [balance,setBalance]=useState<number|null>(null);

    useEffect(()=>{
        const fetchBalance = async () => {
         
            const infuraApiKey = 'e0e1732056954991a7d2b12391a220cd';
            const infuraEndpoint = `https://mainnet.infura.io/v3/${infuraApiKey}`;
            
            const web3 = new Web3(new Web3.providers.HttpProvider(infuraEndpoint));
            
            const walletAddress = '0xdAC17F958D2ee523a2206206994597C13D831ec7';

            const balance = await web3.eth.getBalance(walletAddress);
            setBalance(Number(web3.utils.fromWei(balance, 'ether')));
        }
        fetchBalance();
    },[])
    return (
        <div>
             <h1 >Balnce is</h1>
             <p><span>Balance: </span> {balance !== null ? `${balance} USDT` : 'Loading...'}</p>
        </div>
    )
}

export default ReadBalance
