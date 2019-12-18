const express = require('express');
const showdata = require('./showdata');
const router = express.Router();
const pool = require('./pg');
let inssql = 'INSERT into manager(id,username,name,password,sex,work,phone,email,jurisdiction) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)';
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
    pool.query('DELETE FROM manager WHERE id=$1',data)
    .catch(err=>{
        console.error(err)
    });
})
//添加管理员接口
router.post('/',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    var data = '';
    req.on('data',(chunk)=>{
      data += chunk;
    });
    req.on('end',()=>{
        data = JSON.parse(data);
        pool.query('select * from manager', (error,results,fields)=> {
        //error,results,fields:错误对象，json数组，数据信息数组
            isregister = true;
            if (error) console.log(error.message);
            for(var i=0;i<results.rows.length;i++){
                console.log(results.rows[i]);
                if(results.rows[i].phone === data.phone){
                    isregister = false;
                    break;
                }
            }
            if(isregister){
                db = { state: 200, message: '注册成功', content: isregister };
                var arr = [];
                for(let i in data){
                    arr.push(data[i]);
                }
                pool.query(inssql,arr)
                .catch(err=>{
                    console.error(err)
                });
                res.send(db);
            }else{
                db = { state: 200, message: '注册失败', content: isregister };
                res.send(db);
            };
        });
    });
});
module.exports = router;