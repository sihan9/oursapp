
var db = require('./mssql')
const express = require('express');
var app = express();
var data ='';

//登陆信息
app.get('/login',(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  db.sql('select * from Systemuser',function(err,result){
    if(err){
      console.log(err);
      return;
    }
    data = result;
  })
  res.type('text/html');
  res.status(200);
  res.send(data);
  
})


app.listen(8080);