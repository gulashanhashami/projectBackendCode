
const path= require("path");
const express=require("express");
const Cart=require("../models/cart.model")
const router=express.Router();
//post the data
router.post("", async(req, res)=>{
    try {
        const cart= await Cart.create(req.body);
        return res.status(201).send(cart);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

//get the data
router.get("", async(req,res)=>{
    try {
        
        const carts=await Cart.find().lean().exec();
        return res.status(200).send(carts); 
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

//get single data by id
router.get("/:id", async (req, res) => {
    try {
   
        const cart = await Cart.findById(req.params.id).lean().exec();
  
        return res.status(200).send({ carts: cart });

    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

  //patch the data(means partially upadated not fully)
  router.patch("/:id", async (req, res) => {
    try {
        const cart = await Cart.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
          })
          .lean()
          .exec();
    
        return res.status(200).send(cart);
      } catch (err) {
        return res.status(500).send(err.message);
      }
  });

  //delete a single data by id
  router.delete("/:id", async (req, res) => {
    try {
        const cart = await Cart.findByIdAndDelete(req.params.id).lean().exec();
    
        return res.status(200).send(cart);
      } catch (err) {
        return res.status(500).send(err.message);
      }
  });

module.exports=router;

//handle CRUD operation