const express = require('express');
const showdata = require('./showdata');
const router = express.Router();
const pool = require('./pg');
let selsql = 'select * from manager';
let inssql = 'INSERT into manager(id,username,name,password,sex,work,phone,email) VALUES($1,$2,$3,$4,$5,$6,$7,$8)';
//管理员信息页面接口
router.get('/',(req,res)=>{
    let  sql = 'SELECT * FROM manager';
    showdata(res,sql);
});
//管理员信息删除接口
router.get('/delete',(req,res)=>{
    var data = [];
    for(let i in req.query){
        data.push(req.query[i]);
    }
    console.log(data);
    pool.query('DELETE FROM manager WHERE id=$1',data)
    .catch(err=>{
        console.error(err)
    });
})
//添加管理员接口
router.post('/',(req,res)=>{
    let user = {
        id:'',
        username:'',
        name:'',
        pwd:'',
        sex:'',
        work:'',
        phone:'',
        email:''
    }
    var data = '';
    req.on('data',(chunk)=>{
      data += chunk;
    });
    req.on('end',()=>{
        console.log(data);
        var Data = decodeURIComponent(data);
        Data = Data.split('&');
        for(let i= 0 ;i<Data.length;i++){
            Data[i]=Data[i].split('=');
            user[Data[i][0]]=Data[i][1];
            
        }
        console.log(user);
        pool.query(selsql, (error,results,fields)=> {
        //error,results,fields:错误对象，json数组，数据信息数组
            isregister = true;
            if (error) console.log(error.message);
            for(let i=0;i<results.length;i++){
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
module.exports = router;