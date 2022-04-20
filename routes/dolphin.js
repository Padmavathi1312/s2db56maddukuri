var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dolphin', { title: 'Search Results dolphin' });
});

// GET request for one dolphin.
router.get('/dolphin/:id',dolphin_controllers.dolphin_detail);

module.exports = router;
