const express = require('express');
var app = express();
var showdata = require('./Routes/showdata')
var Login = require('./Routes/Login');
var Users = require('./Routes/Users');
var Manager = require('./Routes/Manager');
var Artical = require('./Routes/Artical');
var Feedback = require('./Routes/Feedback');
//const pool = require('./pg');
/**
 * /login：登录接口
 * /user：用户信息接口
 * /manager：管理员信息接口
 */
app.use('/login',Login);
app.use('/user',Users);
app.use('/manager',Manager);
app.use('/title',Artical);
app.use('/feedback',Feedback);
app.listen(8080);