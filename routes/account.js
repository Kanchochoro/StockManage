const express=require('express');
const router=express.Router();

router.get('/login',(req,res)=>{

    res.render('account/login',{
        title:"Login",
        layout:"layouts/login_register.hbs"
    });
});


module.exports=router;