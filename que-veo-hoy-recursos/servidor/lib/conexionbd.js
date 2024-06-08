var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : '127.0.0.1',
  port     : '3305',
  user     : 'root',
  database : 'queveohoy'
});

module.exports = connection;

