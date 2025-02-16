
const express=require("express");
const dotenv=require("dotenv");
const {chats} = require("./data/data");
const app=express();
dotenv.config();
app.get('/',(req,res)=>{
    res.send("API IS RUNNING");

});

app.get('/api/chats',(req,res)=>{
    res.send(chats);
});

app.get('/api/chats/:id',(req,res)=>{
    //console.log(req.params.id);
    const singleChat =chats.find((c)=>c.id===req.params.id);
    res.send(singleChat);
});
const PORT=process.env.PORT || 5000;

app.listen(5000,console.log(`Server started on PORT ${PORT}`));