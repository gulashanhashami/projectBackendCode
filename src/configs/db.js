const mongoose=require("mongoose");  
module.exports=()=>{ 
    return mongoose.connect("mongodb+srv://gulashanhashami:EcWv0oD7jYk3ywnd@cluster0.ojiqr.mongodb.net/commerce_data?retryWrites=true&w=majority")
} 