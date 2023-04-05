const express=require('express');
const router=express.Router();

router.get('/login',(req,res)=>{

    res.render('account/login',{
        title:"Login",
        heading:"User Login",
        layout:"layouts/login_register.hbs"
    });
});



router.get('/register',(req,res)=>{
      res.render('account/register',{
        title:'Register Account',
        heading:'Register a new user account',
        layout:'layouts/login_register.hbs'
    });
});

module.exports=router;