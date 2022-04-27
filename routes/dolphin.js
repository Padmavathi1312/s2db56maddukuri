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

/* GET costumes for all instances view*/
router.get('/', dolphin_controllers.dolphin_view_all_Page);

/* GET costumes for one instance view*/
router.get('/detail', dolphin_controllers.dolphin_view_one_Page);

/* GET create dolphin page */
router.get('/create', secured, dolphin_controllers.dolphin_create_Page);

/* GET update dolphin page */
router.get('/update',secured, dolphin_controllers.dolphin_update_Page);

/* GET delete delete page */
router.get('/delete',secured, dolphin_controllers.dolphin_delete_Page);

module.exports = router;