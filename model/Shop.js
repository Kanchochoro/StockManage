const mongoose=require("mongoose");


const shopRegister= new mongoose.Schema({
    shopName:{
        type:String,
        required:true
    },
    shopNumber:{
        type:String,
        required:true

    },
    floor:{
     type:String,
     required:true,
    },
    shopManager:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User,
        
    }
});