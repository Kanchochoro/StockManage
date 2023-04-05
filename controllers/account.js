const User=require("../model/User");


module.exports={
    login:async(req,res)=>{
      try{
        const email=req.body.email;
        const password=req.body.password;
        const user=await User.findOne({email})

        if(user){
            if(user.email===email && user.password===password){
                res.redirect('/');
            }else{
                throw new Error("Invali Login attempt");
               // res.redirect('/account/login');
            }
           
        }else{
            res.redirect('/account/register');
        }


      }catch(e){

      }
    },
  register:async(req,res)=>{
    try{
       var emails=req.body.email;
       var uphone=req.body.uphone;
       var uname=req.body.uname;
       var passwrod=req.body.password;
       if(emails=="" ||uname=="" || uphone==""|| passwrod==""){
       if(req.body.cpassword===req.body.password){
       // const email=req.body.email;
        const user={
            uname:uname,
            uphone:uphone,
            email:emails,
            password:passwrod
            
        }
        const isAlreadyRegister=await User.findOne({email:emails});
        if(isAlreadyRegister){
          throw new Error("This account is already Registed,Try another email");
        }
        else{
          // const token=await User.get
          const registerUser=new User(user);
          const token=await registerUser.generateUserLoginRegisterToken();
          res.cookie('jwt',token,{ maxAge:90000000,httpOnly:true});
          await registerUser.save()
          if(registerUser){
            console.log("add to database");
          }
          else{
            throw new Error("Some error occure try again ");
          }
        }
        
        
        }
        else{
          throw new Error("Password not match ");
        }
      }else{
        throw new Error("First fill all your data to register new account");
      }
    }catch(e){

    }
  }  
}