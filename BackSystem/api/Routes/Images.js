const express = require('express');
const showdata = require('./showdata');
const bodyParser = require('body-parser')
const url = require('url')
const router = express.Router();
const pool = require('./pg');
const fs = require('fs');
let sql = 'select * from users'; 
let arr = [];

router.get('/img',(req,res)=>{
    
    let name = req.query.name;
    console.log(name);
    var file = '/root/Database/Nodejs/api/';
    console.log(file+name);
    res.sendFile(file+name);
})
module.exports = router;