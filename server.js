const express = require("express");
require("dotenv").config({ path: './config/.env' });
const app = express();
let port = process.env.PORT;

app.get('/',(req,res)=>{
    res.send("EndPoint work ")
});

app.listen(port,()=>{
    console.log("server running in :",port);
})
