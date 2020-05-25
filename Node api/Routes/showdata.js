const express = require('express');
const router = express.Router();
const pool = require('./pg');

function showdata (res,sql){
    pool.query(sql, (error,results,fields)=> {
        if (error) console.log(error.message);
        // console.log(sql);
        console.log(results);
        //对象解析为json字符串// results = JSON.stringify(results);
        var db = { state: 200, message: '获取成功', content: results.rows };
        var data = JSON.stringify(db);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.writeHead(200,{'Content-Type':'text/plain;charset="utf-8"'});
        res.end(data);
    });
}
module.exports = showdata;