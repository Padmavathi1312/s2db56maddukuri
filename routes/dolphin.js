var express = require('express');
const dolphin_controllers= require('../controllers/dolphin');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
req.session.returnTo = req.originalUrl;
res.redirect("/login");
}

/* GET home page. */
router.get('/', dolphin_controllers.dolphin_view_all_Page);

/* GET detail dolphin page */
router.get('/detail', dolphin_controllers.dolphin_view_one_Page);

/* GET create dolphin page */
router.get('/create', dolphin_controllers.dolphin_create_Page);

/* GET create update page */
router.get('/update', secured, dolphin_controllers.dolphin_update_Page);

/* GET delete delete page */
router.get('/delete', dolphin_controllers.dolphin_delete_Page);

module.exports = router;