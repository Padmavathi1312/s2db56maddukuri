var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var dolphin_controller = require('../controllers/dolphin');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Handbag ROUTES ///
// POST request for creating a Handbag.
router.post('/dolphin', dolphin_controller.dolphin_create_post);
// DELETE request to delete Handbag.
router.delete('/dolphin/:id', dolphin_controller.dolphin_delete);
// PUT request to update Handbag.
router.put('/dolphin/:id', dolphin_controller.dolphin_update_put);
// GET request for one Handbag.
router.get('/dolphin/:id', dolphin_controller.dolphin_detail);
// GET request for list of all Handbag.
router.get('/dolphin', dolphin_controller.dolphin_list);
module.exports = router;