
const mongoose=require("mongoose");
const addressSchema=new mongoose.Schema(
    {
        Name: { type: String, require: true },
        phone: { type: String, require: true },
        house_no: { type: Number, require: true },
        area: { type: String, require: true },
        pincode: { type: Number, require: true }, 
        city: { type: String, require: true }, 
        state: { type: String, require: true },
        location: { type: String, require: true },
    },
    {
        versionKey:false,
        timestamps:true,
    }
);
module.exports= mongoose.model("address", addressSchema);