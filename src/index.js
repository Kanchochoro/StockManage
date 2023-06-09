const { json } = require('express');
const express=require('express');
const app=express();
const cookieParser=require('cookie-parser');
const path=require('path');
const staticPath=path.join(__dirname,"../public");
console.log(staticPath);
app.use(express.static(staticPath));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cookieParser());
const viewPath=path.join(__dirname,"../temp/views");
app.set("views",viewPath);
app.set("view engine","hbs");
const db=require("../db-config/db");
const account=require('../routes/account');
const port=process.env.port||3000;
// db();

console.log(viewPath);

app.get("/",(req,res)=>{
    res.render('index',{
         title:"Login",
        layout:"layouts/login_register"},);
});

app.use("/account",account);



app.listen(port,()=>{
 console.log(`Sever is connecting in port ${port}`);
});