var express = require('express');
var router = express.Router();
var formidable = require('formidable');
/* 图片上传路由 */
let showUrl;
router.post('/uploader', function(req, res) {
    var form = new formidable.IncomingForm();   //创建上传表单
      form.encoding = 'utf-8';        //设置编辑
      form.uploadDir = './images';     //设置上传目录
      form.keepExtensions = true;     //保留后缀
      form.maxFieldsSize = 2 * 1024 * 1024;   //文件大小
 
      form.parse(req, function(err, fields, files) {
        console.log(fields);
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
        showUrl = files.pic.path;
        res.json({
          "newPath":showUrl
        });
      });
  
});
router.get('/images', function (req, res) {
    var file = '/root/Database/Nodejs/api/';

    console.log(file);
    console.log(file + showUrl);
    res.sendFile(file  + showUrl);
})
module.exports = router;