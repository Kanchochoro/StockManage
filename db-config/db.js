const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();

module.exports= async function(){
    try{
        const connect=await mongoose.connect(process.env.ONLINE_DB_URL,{useNewUrlParser:true,useUnifiedTopology:true,autoIndex:true,
            // useFindAndModify:false
        })
         console.log(connect.connection.host);
    }catch(e){
        console.log(e);
        throw new Error(e);
    }

}