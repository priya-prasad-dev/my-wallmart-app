import React, { useState } from "react";
import Web3 from "web3";
import { abi, address } from "../../contract/config";
import WalDataTables from "./wal-datatable.component";
const FetchWalProduct = () => {
  const web3 = new Web3(Web3.givenProvider);
  const contract = new web3.eth.Contract(abi, address);
  const [symbolOn, setSymbolOn] = useState();
  const DisplayVal = async () => {
    const meThod = await contract.methods.fetchWallmartProducts().call();
    setSymbolOn(meThod);
    console.log(meThod);
  };
  return (
    // sx={{ marginLeft: "10%"}}
    <>
    <div>
      <button style={{ float: "right " }} type="submit" onClick={DisplayVal}>
        GET
      </button>
      <WalDataTables datam={symbolOn} />
    </div>
    </>
  );
};

export default FetchWalProduct;
