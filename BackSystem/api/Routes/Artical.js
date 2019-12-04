const express = require('express');
const showdata = require('./showdata');
const router = express.Router();
const pool = require('./pg');
//帖子信息页面接口
router.get('/',(req,res)=>{
    let  sql = 'SELECT * FROM article';
    showdata(res,sql);
})
//帖子删除接口
router.get('/delete',(req,res)=>{
    var data = [];
    for(let i in req.query){
        data.push(req.query[i]);
    }
    console.log(data);
    pool.query('DELETE FROM article WHERE phone=$1',data)
    .catch(err=>{
        console.error(err)
    });
})
module.exports = router;