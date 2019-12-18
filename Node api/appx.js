const express = require('express');
var app = express();
var Images = require('./Routes/Images')
const bodyParser = require('body-parser');
var showdata = require('./Routes/showdata')
var Login = require('./Routes/Login');
var Users = require('./Routes/Users');
var Manager = require('./Routes/Manager');
var Artical = require('./Routes/Artical');
var Feedback = require('./Routes/Feedback');
var Usersx = require('./Routes/Usersx');
const bodyParser = require('body-parser');
app.use(bodyParser.json());//数据JSON类型
app.use(bodyParser.urlencoded({ extended: false }));//解析post请求数据
// var Register = require('./Routes/Register');
//const pool = require('./pg');
/**
 * /login：登录接口
 * /user：用户信息接口
 * /manager：管理员信息接口
 * /title：帖子信息接口
 * /feedback：反馈信息接口
 */
// app.use(bodyParser.json());
app.use('/login',Login);
app.use('/user',Users);
app.use('/manager',Manager);
app.use('/title',Artical);
app.use('/feedback',Feedback);
app.use('/usersx',Usersx);
app.use('/images',Images);
app.listen(8015);