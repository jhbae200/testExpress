var express = require('express');
var router = express.Router();
var testDAO = require('../database/testDAO');

router.get('/', testDAO.selectAll);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { data: req.db_result });
});

module.exports = router;
