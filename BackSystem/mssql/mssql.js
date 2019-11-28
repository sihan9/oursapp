var mssql = require('mssql');
var db = {};
//执行sql,返回数据.
db.sql = function (sql, callBack) {
 var connection = new  mssql.ConnectionPool("mssql://sa:19990624@localhost/BackData", function (err) {
  if (err) {
   console.log(err);
   return;
  }
  var ps = new mssql.PreparedStatement(connection);
  ps.prepare(sql, function (err) {
   if (err){
    console.log(err);
    return;
   }
   ps.execute('', function (err, result) {
    if (err){
     console.log(err);
     return;
    }
    ps.unprepare(function (err) {
     if (err){
      console.log(err);
      callback(err,null);
      return;
     }
      callBack(err, result);
    });
   });
  });
 });
};
module.exports = db;