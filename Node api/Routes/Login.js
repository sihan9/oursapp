const express = require('express');
const showdata = require('./showdata');
const router = express.Router();
const pool = require('./pg');
// const lock = require('./lock');

let  sql = 'SELECT * FROM manager';
var islogin = false;

router.post('/',(req,res)=>{
    let user = {
        userid:'',
        pwd:''
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
        pool.query(sql, (error,results,fields)=> {
        //error,results,fields:错误对象，json数组，数据信息数组
            console.log(results);
            islogin = false;
            if (error) console.log(error.message);
            for(let i=0;i<results.length;i++){
                console.log(results[i].id);
                console.log(results[i].password);
                // if(results[i].id === user.userid && results[i].password === user.pwd){
                //     islogin = true;
                //     break;
                // }
            }
            if(!islogin){
                console.log("Landing failed");
                db = { state: 200, message: '登陆失败', content: islogin };
            }else{
                console.log("Landing successfully");
                db = { state: 200, message: '登陆成功', content: islogin };
            };
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.json(db);
        });
    });
});
module.exports = router;