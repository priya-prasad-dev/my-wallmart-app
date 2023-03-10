import React, { useState } from "react";
import Web3 from "web3";
import { abi, address } from "../../contract/config";
import CusDataTables from "./cus-datatable.component";
const FetchCusProduct = () => {
  const web3 = new Web3(Web3.givenProvider);
  const contract = new web3.eth.Contract(abi, address);
  const [symbolOn, setSymbolOn] = useState();
  const DisplayVal = async () => {
    const meThod = await contract.methods.fetchCustomerProducts().call();
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
      <CusDataTables datam={symbolOn} />
    </div>
    </>
  );
};

export default FetchCusProduct;
