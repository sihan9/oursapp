var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var fs = require('fs');
/* 图片上传路由 */
router.post('/uploader', function(req, res) {
    var form = new formidable.IncomingForm();   //创建上传表单
      form.encoding = 'utf-8';        //设置编辑
      form.uploadDir = './images';     //设置上传目录
      form.keepExtensions = true;     //保留后缀
      form.maxFieldsSize = 2 * 1024 * 1024;   //文件大小
 
      form.parse(req, function(err, fields, files) {
 
        if (err) {
          res.locals.error = err;
          res.render('index', { title: TITLE });
          return;
        }
        console.log(files);
        var type = files.pic.type;
        console.log(type);
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
        var showUrl = files.pic.path;
        res.json({
          "newPath":showUrl

        });
      });
  
});
router.get('/images', function (req, res) {
    var file = '/root/Database/Nodejs/api';
    // file+="upload_a072e0962442e04c8a18750f2e35f544.jpg";
    // res.sendFile(file+"upload_c0c06b583d643e51bdd571af9765fea3.jpg"  );

    console.log(file);
    console.log(req.url)
    console.log(file + req.url+'/upload_a072e0962442e04c8a18750f2e35f544.jpg');
    res.sendFile(file  + req.url+'/upload_a072e0962442e04c8a18750f2e35f544.jpg');
    console.log("Request for " + req.url + " received.");
    // res.writeHead(200,{'Content-Type':'image/jpg'});
    // fs.readFile(file,'utf-8',(err,data)=>{
    //     if(err){
    //       res.end('Page not found!');
    //     }else{
    //       res.end(data);
    //     }
    //   })
    // console.log("Request for " + req.url + " received.");
})
module.exports = router;