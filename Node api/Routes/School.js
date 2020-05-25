const express = require('express');
const showdata = require('./showdata');
const router = express.Router();
const pool = require('./pg');
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
module.exports = router;
