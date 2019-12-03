const express = require('express');
const showdata = require('./showdata');
const router = express.Router();
const pool = require('./pg');
//用户信息管理页面接口
router.get('/',(req,res)=>{
    let  sql = 'SELECT * FROM users';
    showdata(res,sql);
});
let selsql = 'SELECT * FROM users';
let inssql = 'INSERT into users(id,name,img,password,sex,school,phone,email) VALUES($1,$2,$3,$4,$5,$6,$7,$8)';
let delsql = 'DELETE FROM users WHERE id=$1';
//用户注册接口
router.post('/',(req,res)=>{
    let user = {
        id:'',
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
        var Data = decodeURIComponent(data);
        Data = Data.split('&');
        for(let i= 0 ;i<Data.length;i++){
            Data[i]=Data[i].split('=');
            user[Data[i][0]]=Data[i][1];
            
        }
        pool.query(selsql, (error,results,fields)=> {
        //error,results,fields:错误对象，json数组，数据信息数组
            isregister = true;
            if (error) console.log(error.message);
            for(let i=0;i<results.length;i++){
                console.log(results[i].id);
                console.log(results[i].password);
                if(results[i].phone === user.phone && results[i].id === user.id){
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
                var arr = [];
                for(let i in user){
                    arr.push(user[i]);
                }
                console.log(arr);
                
                pool.query(inssql,arr)
                .catch(err=>{
                    console.error(err)
                });
            };
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.json(db);
        });
        
    });
});
//用户信息删除接口
router.get('/delete',(req,res)=>{
    var data = [];
    for(let i in req.query){
        data.push(req.query[i]);
    }
    console.log(data);
    pool.query('DELETE FROM users WHERE id=$1',data)
    .catch(err=>{
        console.error(err)
    });
    pool.query('DELETE FROM article WHERE id=$1',data)
    .catch(err=>{
        console.error(err)
    });
})
module.exports = router;