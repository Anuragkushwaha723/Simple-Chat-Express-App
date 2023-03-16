const express=require('express');
const bodyParser=require('body-parser');
const loginRouter=require('./routes/login');
const screenRouter=require('./routes/screen');
const app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.use('/login',loginRouter);
app.use(screenRouter);
app.listen(4000);