const express = require('express');
const showdata = require('./showdata');
const bodyParser = require('body-parser')
const router = express.Router();
const pool = require('./pg');
const fs = require('fs');
var formidable = require('formidable');
router.get('/',(req,res)=>{
    let  sql = 'SELECT * FROM users';
    showdata(res,sql);
});
let selsql = 'SELECT * FROM users';
let inssql = 'INSERT into users(name,school,schoolnum,sex,password,phone) VALUES($1,$2,$3,$4,$5,$6)';
//后台用户信息删除接口
router.get('/delete',(req,res)=>{
    var data = [];
    for(let i in req.query){
        data.push(req.query[i]);
    }
    console.log(data);
    pool.query('DELETE FROM users WHERE phone=$1',data)
    .catch(err=>{
        console.error(err)
    });
    pool.query('DELETE FROM article WHERE phone=$1',data)
    .catch(err=>{
        console.error(err)
    });
})
let isregister;
let phone;
//用户登录界面接口
router.post('/login',(req,res)=>{
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
        var arr = [];
        for(let i in data){
            arr.push(data[i])
        }
        phone = arr[0];
        pool.query(selsql, (error,results,fields)=> {
        //error,results,fields:错误对象，json数组，数据信息数组
            isregister = false;
            if (error) console.log(error.message);
            for(let i=0;i<results.rows.length;i++){
                if(results.rows[i].phone === arr[0] && results.rows[i].password === arr[1]){
                    isregister = true;
                    break;
                }
            }
            console.log(isregister);
            if(isregister){
                console.log("Landing successfully");
                db =  {state: 200, message: '登录成功', content: isregister };  
                res.send(db);
            }else{
                console.log("Landing failed");
                db = { state: 200, message: '登录失败', content: isregister }; 
                res.send(db);
            };
        });
    });
});
router.get('/login',(req,res)=>{
    db = { state: 200, message: '登录成功', content: phone }; 
    res.send(db);
});
//前端注册接口
let registerphone;
//手机号
router.post('/register',(req,res)=>{
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
        var arr = [];
        for(let i in data){
            arr.push(data[i])
        }
        arr.splice(2,1);
        registerphone = arr[0];
        pool.query(selsql, (error,results,fields)=> {
        //error,results,fields:错误对象，json数组，数据信息数组
            isregister = true;
            if (error) console.log(error.message);
            for(let i=0;i<results.rows.length;i++){
                if(results.rows[i].phone === registerphone){
                    isregister = false;
                    break;
                }
            }
            if(isregister){
                console.log("Register successfully");
                db =  {state: 200, message: '注册成功', content: isregister }; 
                pool.query('insert into users(phone,password) values($1,$2)',arr)
                .catch(err=>{
                    console.error(err)
                }); 
                res.send(db);
            }else{
                console.log("Register failed");
                db = { state: 200, message: '注册失败', content: isregister }; 
                res.send(db);
            };
        });
    });
});
router.get('/register',(req,res)=>{
    db = { state: 200, message: '注册成功', content: registerphone }; 
    res.send(db);
});
//信息页面修改接口
let updatesql = 'UPDATE users SET name=$1,sex=$2,school=$3,schoolnum=$4,password=$5,img=$6 WHERE phone=$7'
router.post('/information',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    var form = new formidable.IncomingForm();   //创建上传表单
      form.encoding = 'utf-8';        //设置编辑
      form.uploadDir = './images';     //设置上传目录
      form.keepExtensions = true;     //保留后缀
      form.maxFieldsSize = 2 * 1024 * 1024;   //文件大小
      form.parse(req, function(err, fields, files) {
        var arr =[];
        console.log(fields);
        console.log(files);
        if (err) {
          res.locals.error = err;
        //   res.render('index', { title: TITLE });
          return;
        }
        var extName = 'png';  //后缀名
        switch (files.pic.type) {
          case 'image/pjpeg':
            extName = 'jpg';
            break;
          case 'image/jpeg':
            extName = 'jpg';
            break;
          case 'image/png':
            extName = 'png';
            break;
          case 'image/x-png':
            extName = 'png';
            break;
        }
 
        if(extName.length == 0){
          res.locals.error = '只支持png和jpg格式图片';
          res.render('index', { title: TITLE });
          return;
        }
        //显示地址；
        showUrl = files.pic.path;
        
        for(let i in fields){
            arr.push(fields[i]);
        }
        arr.push(files.pic.path);
        arr.push(phone);
        console.log(arr);
        pool.query(selsql, (error,results,fields)=> {
            isregister = false;
            if (error) console.log(error.message);
            for(let i=0;i<results.rows.length;i++){
                if(results.rows[i].phone === phone){
                    isregister = true;
                    break;
                }
            }
            if(isregister){
                pool.query(updatesql,arr)
                .catch(err=>{
                    console.error(err)
                });
                 
                let sel = `SELECT * FROM users WHERE phone='${phone}'`;
                console.log(sel);
                showdata(res,sel);
            }
        })
      });
});
router.get('/massage',(req,res)=>{
    let sel = `SELECT * FROM users WHERE phone='${phone}'`;
    // showdata(res,sel);
    pool.query(selsql, (error,results,fields)=> {
        //error,results,fields:错误对象，json数组，数据信息数组
            isregister = false;
            if (error) console.log(error.message);
            for(let i=0;i<results.rows.length;i++){
                if(results.rows[i].phone === phone){
                    isregister = true;
                    break;
                }
            }
            if(isregister){
                console.log("Register successfully");
                // db =  {state: 200, message: '注册成功', content: isregister }; 
                // pool.query('insert into users(phone,password) values($1,$2)',arr)
                // .catch(err=>{
                //     console.error(err)
                // }); 
                showdata(res,sel);
                // res.send(db);
            }else{
                console.log("Register failed");
                db = { state: 200, message: '获取失败', content: isregister }; 
                res.send(db);
            };
        });
})
//查找好友
router.post('/search',(req,res)=>{
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
        console.log(data);
        var arr = [];
        for(let i in data){
            arr.push(data[i])
        }
        phone = arr[0];
        pool.query(selsql, (error,results,fields)=> {
            //error,results,fields:错误对象，json数组，数据信息数组
                isregister = false;
                if (error) console.log(error.message);
                for(let i=0;i<results.rows.length;i++){
                    if(results.rows[i].phone === arr[0]){
                        isregister = true;
                        let inssql = `update users set friend="${phone}", where phone = ${phone};`;
                        pool.query(inssql);
                        break;
                    }
                }
                console.log(isregister);
                if(isregister){
                    console.log("Landing successfully");
                    db =  {state: 200, message: '添加成功', content: isregister };  
                    res.send(db);
                }else{
                    console.log("Landing failed");
                    db = { state: 200, message: '查无此人', content: isregister }; 
                    res.send(db);
                };
        });
    });
})

router.get('/images', function (req, res) {
    let sel = `SELECT * FROM users WHERE phone='${phone}'`;
    showdata(req,sel);
    pool.query(sel, (error,result,fields)=> {
        console.log(result);
        console.log(result.rows[0])
        db =  {state: 200, message: '修改成功', content: result.rows[0] }; 
        res.send(db);
        var file = '/root/Database/Nodejs/api/';
        res.sendFile(file  + result.rows[0].img);
    })
})

module.exports = router;