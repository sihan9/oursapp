const pg = require('pg');

var config ={
	user:'niedan',
	database:'niedansql',
	password:'12345',
	port:5432
}
var pool = new pg.Pool(config);
module.exports = pool;