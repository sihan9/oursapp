const express = require('express');
var app = express();
const bodyParser = require('body-parser');
var showdata = require('./Routes/showdata')
var Login = require('./Routes/Login');
var Users = require('./Routes/Users');
var Manager = require('./Routes/Manager');
var Artical = require('./Routes/Artical');
var Feedback = require('./Routes/Feedback');
var Test = require('./Routes/Testq');
var Form = require('./Routes/Form');
// var Register = require('./Routes/Register');
//const pool = require('./pg');
/**
 * /login：登录接口
 * /user：用户信息接口
 * /manager：管理员信息接口
 * /title：帖子信息接口
 * /feedback：反馈信息接口
 */
app.use(bodyParser.json());
app.use('/login',Login);
app.use('/user',Users);
app.use('/manager',Manager);
app.use('/title',Artical);
app.use('/feedback',Feedback);
app.use('/test',Test);
app.use('/form',Form);
app.listen(8010);