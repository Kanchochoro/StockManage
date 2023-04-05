const mongoose=require("mongoose");
const validator=require("validator");
const jwt=require("jsonwebtoken");
const env=require('dotenv');
env.config();



const registerUser=new mongoose.Schema({
    uname:{
        type:String,
        required:true
    },
    pnumber:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(val){
            if(!validator.isEmail(val)){
              throw new Error("INVALID EMAIL")
            }
        }
    },
    passwrod:{
       type:String,
       required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
    tokens:[{
        token:{
            type:String,
            // required:true
        }
    }],
    emailVerify:{
        type:Boolean,
        default:false,
    },
    roles:[
        {type:String,
        default:"user",
        lowercase:true
        }
    ],
});

registerUser.methods.generateUserLoginRegisterToken=async function(){
try{
  const token=await jwt.sign({_id:this._id.toString()},process.env.SECRET_KEY);
  this.tokens=this.tokens.concat({token:token});
  await this.save();
  return token;
}
catch(e){
 throw new Error(e);
}
}


const User=new mongoose.model("User",registerUser);
module.exports=User;