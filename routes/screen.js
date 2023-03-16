const express=require('express');
const fs=require('fs');
const router=express.Router();

router.get('/',(req,res,next)=>{
    fs.readFile('message.txt',{utf:8},(err,data)=>{
        if(err){
            console.log(err);
            data='No chat exist';
        }
        res.send(`
        ${data}
        <h2>Message App</h2>
        <form onsubmit="document.getElementById('username').value=localStorage.getItem('username')" action="/" method="POST">
        <input type="text" name="message" placeholder="message">
        <input type="hidden" id="username" name="username">
        <br>
        <button type="submit">Send</button>
        </form>`);
    })
});
router.post('/',(req,res,next)=>{
    fs.writeFile('message.txt',` ${req.body.username}:${req.body.message}`,{flag:'a'},(err)=>{
        err ? console.log(err) : res.redirect('/');
    });
});
module.exports=router;
