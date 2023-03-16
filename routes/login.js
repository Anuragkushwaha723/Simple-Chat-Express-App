const express=require('express');
const router=express.Router();

router.get('/',(req,res,next)=>{
    res.send('<form action="/login/message" method="POST"><input type="text" name="username" placeholder="username"><br><button type="Submit">Login</button></form>')
});
router.post('/message',(req,res,next)=>{
    const object=req.body;
    localStorage.setItem("username",object.username);
    res.redirect('/');
})
module.exports=router;