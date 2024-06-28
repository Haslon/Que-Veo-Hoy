var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  port     : '33065',
  user     : 'root',
  database : 'queveohoy'
});
module.exports = connection;

