const express=require('express');
const app=express();
const path=require('path');
const viewPath=path.join(__dirname,"../temp/views");
app.set("views",viewPath);
app.set("view engine","hbs");
const db=require("../db-config/db");
const port=process.env.port||3000;
db();

console.log(viewPath);

app.get("/",(req,res)=>{
    res.render('index',{
         title:"Login",
        layout:"layouts/login_register"},);
});



app.listen(port,()=>{
 console.log(`Sever is connecting in port ${port}`);
});