var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'byj2cx2kfbdsgamf8g3k-mysql.services.clever-cloud.com',
  port     : '3306',
  user     : 'ucsrlbcywdlaph3f',
  password : 'kbn5Aa3QWO08YPxeDh9o',
  database : 'byj2cx2kfbdsgamf8g3k'
});
module.exports = connection;

