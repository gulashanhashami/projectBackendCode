
const path= require("path");
const express=require("express");
const Address=require("../models/address.model")
const router=express.Router();
//post the data
router.post("", async(req, res)=>{
    try {
        const address= await Address.create(req.body);
        return res.status(201).send(address);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

//get the data
router.get("", async(req,res)=>{
    try {
        
        const addresss=await Address.find().lean().exec();
        return res.status(200).send(addresss); 
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

//get single data by id
router.get("/:id", async (req, res) => {
    try {
   
        const address = await Address.findById(req.params.id).lean().exec();
  
        return res.status(200).send({ addresss: address });

    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

  //patch the data(means partially upadated not fully)
  router.patch("/:id", async (req, res) => {
    try {
        const address = await Address.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
          })
          .lean()
          .exec();
    
        return res.status(200).send(address);
      } catch (err) {
        return res.status(500).send(err.message);
      }
  });

  //delete a single data by id
  router.delete("/:id", async (req, res) => {
    try {
        const address = await Address.findByIdAndDelete(req.params.id).lean().exec();
    
        return res.status(200).send(address);
      } catch (err) {
        return res.status(500).send(err.message);
      }
  });

module.exports=router;

//handle CRUD operation