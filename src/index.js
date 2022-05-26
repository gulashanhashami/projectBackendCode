const express=require("express");
const {register, login}=require("./controllers/user.controller");
const productController=require("./controllers/product.controller")
const cartController=require("./controllers/cart.controller")
const addressController=require("./controllers/address.controller")

const app=express();
app.use(express.json());
app.post("/register", register); 
app.post("/login", login);
app.use("/products", productController);
app.use("/carts", cartController);
app.use("/address", addressController);

module.exports=app; 