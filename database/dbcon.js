/**
 * Created by baejinhwan on 2017. 1. 7..
 */
var mysql = require('mysql');
var pool;
function createPool(next) {
  pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'testSC',
    password: 'wpffl8898'
  });
  next();
}
function getPool() {
  return pool;
}

module.exports.createPool = createPool;
module.exports.getPool = getPool;
