const express = require('express');
const showdata = require('./showdata');
const bodyParser = require('body-parser')
const router = express.Router();
const pool = require('./pg');
const fs = require('fs');
router.get('/',(req,res)=>{
    let  sql = 'SELECT * FROM users';
    showdata(res,sql);
});
let selsql = 'SELECT * FROM users';
// let inssql = 'INSERT into users(name,school,schoolnum,sex,password,phone) VALUES($1,$2,$3,$4,$5,$6)';
//后台用户信息删除接口
router.get('/delete',(req,res)=>{
    var data = [];
    for(let i in req.query){
        data.push(req.query[i]);
    }
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
            if(isregister){
                let str;
                console.log("Landing successfully");
                pool.query(`select * from users where phone='${phone}'`, (error,results,fields)=> {
                    if (error) console.log(error.message);
                    //对象解析为json字符串// results = JSON.stringify(results);
                    str = results.rows;
                    console.log(str)
                    var data = JSON.stringify(str);
                    db =  {state: 200, message: isregister, content: data};  
                    res.send(db);
                });
            }else{
                console.log("Landing failed");
                db = { state: 200, message: isregister, content: isregister }; 
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
router.post('/information',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    console.log(req.query.phone);
    var obj = '';//接收传过来的数据
    req.on('data',function(data){
        obj += data;//data就是传过来的数据
    });
    req.on('end',function(){
        var item = JSON.parse(obj);//解析
        
        var path = 'images/'+item.name+'.jpg';
        let Data = [];
        for(let i in item){
            Data.push(item[i])
        }
        Data[8] = path;
        Data.splice(0,3);
        var base64 = item.pic.replace(/^data:image\/\w+;base64,/, "");
        var dataBuffer = new Buffer(base64, 'base64'); 
        fs.writeFile(path,dataBuffer,function(err){
            if(err){console.log(err);
            }else{console.log('写入成功！');}
        })
        pool.query(selsql, (error,results,fields)=> {
            isregister = false;
            if (error) console.log(error.message);
            for(let i=0;i<results.rows.length;i++){
                if(results.rows[i].phone === item.phone){
                    isregister = true;
                    break;
                }
            }
            if(isregister){
                let updatesql = `UPDATE users SET name=$1,password=$2,school=$3,schoolnum=$4,sex=$5,img=$6 WHERE phone=$7`
                pool.query(updatesql,Data,()=>{
                    pool.query(`select * from users where phone='${item.phone}'`, (error,results,fields)=> {
                        if (error) console.log(error.message);
                        //对象解析为json字符串// results = JSON.stringify(results);
                        str = results.rows;
                        console.log(str)
                        var data = JSON.stringify(str);
                        console.log(data);
                        db =  {state: 200, message: isregister, content: data};  
                        res.send(db);
                    })
                })
            }
        })
    })
});
router.get('/message',(req,res)=>{
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
                showdata(res,sel);
            }else{
                console.log("Register failed");
                db = { state: 200, message: '获取失败', content: isregister }; 
                res.send(db);
            };
        });
})
//查找好友
let friend ='';
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
        // var arr = [];
        // arr.push(data);
        // friend = friend+ arr[0]+',';
        pool.query(selsql, (error,results,fields)=> {
            //error,results,fields:错误对象，json数组，数据信息数组
                isregister = false;
                if (error) console.log(error.message);
                for(let i=0;i<results.rows.length;i++){
                    if(data==results.rows[i].phone){
                        isregister = true;
                        break;
                    }
                }
                if(isregister){
                    // let inssql1 = `update users set friend='${friend}' where phone ='${req.query.phone}'`;
                    // pool.query(inssql1,()=>{
                    //     pool.query(`select * from users where phone='${req.query.phone}'`, (error,results,fields)=> {
                    //         if (error) console.log(error.message);
                    //         //对象解析为json字符串// results = JSON.stringify(results);
                    //         str = results.rows;
                    //         var data = JSON.stringify(str);
                    //         db =  {state: 200, message: isregister, content: data};  
                    //         res.send(db);
                    //     });
                    // })
                    // .catch(err=>{
                    //     console.error(err)
                    // });
                    pool.query(`select * from users where phone='${data}'`, (error,results,fields)=> {
                        if (error) console.log(error.message);
                        //对象解析为json字符串// results = JSON.stringify(results);
                        str = results.rows;
                        var data = JSON.stringify(str);
                        db =  {state: 200, message: isregister, content: data};  
                        res.send(db);
                    });
                }else{
                    console.log("Landing failed");
                    db = { state: 200, message: isregister, content: isregister }; 
                    res.send(db);
                };
        });
    });
})
//添加好友
router.get('/addFriend',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    console.log(req.query.phone);
    console.log(req.query.friendPhone);
    let friend = '';
    pool.query(selsql, (error,results,fields)=> {
        //error,results,fields:错误对象，json数组，数据信息数组
            isregister = false;
            if (error) console.log(error.message);
            for(let i=0;i<results.rows.length;i++){
                if(req.query.phone==results.rows[i].phone){
                    isregister = true;
                    break;
                }
            }
            if(isregister){
                pool.query(`select * from users where phone='${req.query.phone}'`,(error,results,fields)=>{
                    if (error) console.log(error.message);
                    console.log(results);
                    console.log(results.rows[0]);
                    friend = results.rows[0].friend;
                    console.log(friend);
                    friend = friend + req.query.friendPhone+',';
                    let inssql1 = `update users set friend='${friend}' where phone ='${req.query.phone}'`;
                    pool.query(inssql1,()=>{
                        pool.query(`select * from users where phone='${req.query.phone}'`, (error,results,fields)=> {
                            if (error) console.log(error.message);
                            //对象解析为json字符串// results = JSON.stringify(results);
                            str = results.rows;
                            var data = JSON.stringify(str);
                            db =  {state: 200, message: isregister, content: data};  
                            res.send(db);
                        });
                    })
                })
            }else{
                console.log("添加失败");
                db = { state: 200, message: isregister, content: isregister }; 
                res.send(db);
            };
        });
})
//好友列表
router.get('/friend',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    pool.query(`select * from users where phone='${req.query.phone}'`, (error,results,fields)=> {
        //error,results,fields:错误对象，json数组，数据信息数组
            if (error) console.log(error.message);
            db = {state: 200, message: '获取成功',content:results.rows}; 
            res.send(db);
    });
})
module.exports = router;