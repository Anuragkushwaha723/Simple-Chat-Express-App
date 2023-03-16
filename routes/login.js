const express=require('express');
const router=express.Router();

router.get('/',(req,res,next)=>{
    res.send(`
    <h2>Login page</h2>
    <form onsubmit="localStorage.setItem('username',document.getElementById('username').value)" action="/login/product" method="POST">
    <input id="username" type="text" name="title" placeholder="username">
    <br>
    <button type="submit">Login</button>
    </form>`);
});

router.post('/product',(req,res,next)=>{
    res.redirect('/');
})
module.exports=router;