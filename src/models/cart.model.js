

const mongoose=require("mongoose");
const cartSchema=new mongoose.Schema(
    {
        title: { type: String, require: true },
        price: { type: Number, require: true },
        category: { type: String, require: true },
        description: { type: String, require: true },
        image: { type: String, require: true }, 
        rate: { type: Number, require: true }, 
        amount: { type: Number, default:1 },
    },
    {
        versionKey:false,
        timestamps:true,
    }
);
module.exports= mongoose.model("cart", cartSchema);
