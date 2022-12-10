
const express = require('express');
const app = express();
const connect = require('./configs/db');
const cors = require('cors'); 2
const {register, login}=require("./controllers/user.controller");
const productController=require("./controllers/product.controller")
const cartController=require("./controllers/cart.controller")
const addressController=require("./controllers/address.controller")
app.use(express.json());
const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
}
app.use(cors(corsOptions));
app.post("/register", register); 
app.post("/login", login);
app.use("/products", productController);
app.use("/carts", cartController);
app.use("/address", addressController);


const port = process.env.PORT || 2345;
app.listen(port, async () => {
  try {
    await connect();
  } catch (err) {
    console.error(err.message);
  }
  console.log(`listening on port ${port}`);
});