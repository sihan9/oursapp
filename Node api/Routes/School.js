const express = require('express');
const showdata = require('./showdata');
const router = express.Router();
const pool = require('./pg');
let inssql = 'INSERT into school(cname,ename,province,abbre,time,anniversary,type,attribute,tmajor,bspot,smotto,img,video,badge) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)';
router.get('/info',(req,res)=>{
    let province = req.query.province;
    let  sql = `SELECT cname,badge FROM school WHERE province='${province}'`;
    showdata(res,sql);
});
router.get('/message',(req,res)=>{
    let cname = req.query.cname;
    let  sql = `SELECT * FROM school WHERE cname='${cname}'`;
    showdata(res,sql);
});
router.get('/list',(req,res)=>{
    let  sql = `SELECT * FROM school`;
    showdata(res,sql);
});
router.get('/delete',(req,res)=>{
    console.log(req.query.cname);
    var data = [];
    for(let i in req.query){
        data.push(req.query[i]);
    }
    console.log(data);
    pool.query('DELETE FROM school WHERE cname=$1',data)
    .catch(err=>{
        console.error(err)
    });
});
router.post('/add',(req,res)=>{
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
        console.log(data);
        pool.query('select * from school', (error,results,fields)=> {
        //error,results,fields:错误对象，json数组，数据信息数组
            isAdd = true;
            if (error) console.log(error.message);
            for(var i=0;i<results.rows.length;i++){
                if(results.rows[i].cname === data.cname){
                    isAdd = false;
                    break;
                }
            }
            console.log(isAdd)
            if(isAdd){
                db = { state: 200, message: '添加成功', content: isAdd };
                var arr = [];
                for(let i in data){
                    arr.push(data[i]);
                }
                console.log(arr);
                pool.query(inssql,arr)
                .catch(err=>{
                    console.error(err)
                });
                res.send(db);
            }else{
                db = { state: 200, message: '添加失败', content: isAdd };
                res.send(db);
            };
        });
    });
})
module.exports = router;
