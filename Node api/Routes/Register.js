const express = require('express');
const showdata = require('./showdata');
const router = express.Router();
const pool = require('./pg');

var isregister = false;
var db={};

let selsql = 'SELECT * FROM users';
let inssql = 'INSERT into users SET ?';

router.post('/',(req,res)=>{
    let user = {
        name:'',
        img:'',
        pwd:'',
        sex:'',
        school:'',
        phone:'',
        email:''
    }
    var data = '';
    req.on('data',(chunk)=>{
      data += chunk;
    });
    req.on('end',()=>{
        data = data.split('&');
        for(let i= 0 ;i<data.length;i++){
            data[i]=data[i].split('=');
            user[data[i][0]]=data[i][1];
            
        }
        // console.log(data[i][1].json('utf-8'));
        console.log(user);
        pool.query(selsql, (error,results,fields)=> {
        //error,results,fields:错误对象，json数组，数据信息数组
            console.log(results);
            // console.log(results[1].userid);
            isregister = true;
            if (error) console.log(error.message);
            for(let i=0;i<results.length;i++){
                console.log(results[i].id);
                console.log(results[i].password);
                if(results[i].phone === user.phone){
                    isregister = false;
                    break;
                }
            }
            if(!isregister){
                console.log("Landing failed");
                db = { state: 200, message: '注册失败', content: isregister };
            }else{
                console.log("Landing successfully");
                db = { state: 200, message: '注册成功', content: isregister };
                pool.query(inssql,user);
            };
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.json(db);
        });
    });
});
module.exports = router;