const express = require('express');
const showdata = require('./showdata');
const router = express.Router();
const pool = require('./pg');
router.get('/',(req,res)=>{
    let  sql = 'SELECT * FROM manager';
    showdata(res,sql);
})
module.exports = router;