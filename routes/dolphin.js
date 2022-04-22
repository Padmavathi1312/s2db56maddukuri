var express = require('express');
const dolphin_controllers= require('../controllers/dolphin');
var router = express.Router();

/* GET home page. */
router.get('/', dolphin_controllers.dolphin_view_all_Page);

/* GET detail dolphin page */
router.get('/detail', dolphin_controllers.dolphin_view_one_Page);

/* GET create dolphin page */
router.get('/create', dolphin_controllers.dolphin_create_Page);

/* GET create update page */
router.get('/update', dolphin_controllers.dolphin_update_Page);

/* GET delete delete page */
router.get('/delete', dolphin_controllers.dolphin_delete_Page);

module.exports = router;