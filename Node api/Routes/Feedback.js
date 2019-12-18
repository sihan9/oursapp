const express = require('express');
const showdata = require('./showdata');
const router = express.Router();
const pool = require('./pg');
//反馈信息页面接口
router.get('/',(req,res)=>{
    let  sql = 'SELECT * FROM feedback';
    showdata(res,sql);
})
//反馈信息删除接口
router.get('/delete',(req,res)=>{
    var data = [];
    for(let i in req.query){
        data.push(req.query[i]);
    }
    pool.query('DELETE FROM feedback WHERE phone=$1',data)
    .catch(err=>{
        console.error(err)
    });
})
module.exports = router;