var express = require('express');
var router = express.Router();

// Require controller modules.
var api_controller = require('../controllers/api');
var dolphin_controller = require('../controllers/dolphin');

/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);

/// dolphin ROUTES ///
// POST request for creating a dolphin.
router.post('/dolphins', dolphin_controller.dolphin_create_post);
// DELETE request to delete dolphin.
router.delete('/dolphins/:id', dolphin_controller.dolphin_delete);
// PUT request to update dolphin.
router.put('/dolphins/:id', dolphin_controller.dolphin_update_put);
// GET request for one dolphin.
router.get('/dolphins/:id', dolphin_controller.dolphin_detail);
// GET request for list of all dolphin items.
router.get('/dolphins', dolphin_controller.dolphin_list);

module.exports = router;