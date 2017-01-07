/**
 * Created by baejinhwan on 2017. 1. 7..
 */
var dbcon = require('./dbcon');

function selectAll(req,res,next) {
  var con = dbcon.getPool();
  con.getConnection(function (err, connection){
    if (err) {
      console.error("err : " + err);
      return next(err);
    }
    connection.query('select * from member', function (err, rows) {
      if (err) {
        console.error("err : " + err);
        return next(err);
      }
      console.log("rows : " + JSON.stringify(rows));

      req.db_result = rows;
      connection.release();

      next();
    });
  });
}

module.exports.selectAll = selectAll;