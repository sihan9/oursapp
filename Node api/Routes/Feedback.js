const express = require('express');
const showdata = require('./showdata');
const router = express.Router();
const pool = require('./pg');
//反馈信息页面接口
router.get('/',(req,res)=>{
    let  sql = 'SELECT * FROM feedback';
    showdata(res,sql);
});
//反馈信息提交接口
router.post('/add',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    let data ='';
    req.on('data',(chunk)=>{
      data += chunk;
    });
    req.on('end',()=>{
        data = JSON.parse(data);
        var arr=[];
        for(let i in data){
            arr.push(data[i]);
        }
        console.log(arr);
        db =  {state: 200, message: '注册成功', content: true }; 
        pool.query('insert into feedback(account,content,email) values($1,$2,$3)',arr)
        .catch(err=>{
            console.error(err)
        }); 
        res.send(db);
    });
})
//反馈信息删除接口
router.get('/delete',(req,res)=>{
    var data = [];
    for(let i in req.query){
        data.push(req.query[i]);
    }
    pool.query('DELETE FROM feedback WHERE content=$1',data)
    .catch(err=>{
        console.error(err)
    });
})
module.exports = router;