import React, { useRef } from "react";
import Web3 from "web3";
import {
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import { abi, address } from "../../contract/config";
const SupplierCreate = () => {
    const tokenId = useRef();
    const name = useRef();
    const quantity = useRef();
    const productexpireydate = useRef();
    const supplierprice = useRef();
  const DisplayVal = async () => {
    const mydata = {
        _tokenId: tokenId.current.value,
        _name: name.current.value,
        _quantity: quantity.current.value,
        _productExpiryDate: productexpireydate.current.value,
        _supplierPrice: supplierprice.current.value,
      };
      console.log("data", mydata);
    const web3 = new Web3(Web3.givenProvider);
    const contract = new web3.eth.Contract(abi, address);
    const Accounts = await web3.eth.getAccounts();
    const mintnew = await contract.methods
    .addProductBySupplier(mydata._tokenId,mydata._name,mydata._quantity,mydata._productExpiryDate,mydata._supplierPrice)
    .send({ from: Accounts[0] })
    console.log(mintnew);
  };
  return (
    <React.Fragment>
      <Typography gutterBottom variant="h4" align="center">
        Create Product
      </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Grid container spacing={1}>
              <Grid xs={6} item>
                <TextField
                  type="text"
                  inputRef={tokenId}
                  placeholder="tokenId=0"
                  label="TokenId"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={6} item>
                <TextField
                  type="string"
                  inputRef={name}
                  label="name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={6} item>
                <TextField
                  type="text"
                  inputRef={quantity}
                  name="mint"
                  label="quantity"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={6} item>
                <TextField
                  type="text"
                  inputRef={productexpireydate}
                  label="productexpireydate"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  type="text"
                  inputRef={supplierprice}
                  label="supplierprice"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={DisplayVal}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </React.Fragment>
  );
};

export default SupplierCreate;
