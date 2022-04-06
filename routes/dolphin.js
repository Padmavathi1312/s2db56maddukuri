var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dolphin', { title: 'Search Results dolphin' });
});

module.exports = router;
