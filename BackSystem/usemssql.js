var db = require('./mssql');
db.sql('delete from UserData where userID = 1112 ',function(err,result){
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
});