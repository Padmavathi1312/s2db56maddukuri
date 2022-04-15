var dolphin = require('../models/dolphin');
// List of all dolphin
exports.dolphin_list = async function(req, res) {
    try{
    thedolphin = await dolphin.find();
    res.send(thedolphin);
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    res.status(500);
    }
    };
// for a specific Costume.
exports.icecream_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await icecream.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle Costume create on POST.
exports.dolphin_create_post = async function(req, res) {
    console.log(req.body)
    let document = new dolphin();
    document.dolphin_type = req.body.dolphin_type;
    document.cost = req.body.cost;
    document.size = req.body.size;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
};
// Handle Costume delete form on DELETE.
exports.dolphin_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: dolphin delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.dolphin_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: dolphin update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view
exports.dolphin_view_all_Page = async function(req, res) {
    try{
    thedolphin = await dolphin.find();
    res.render('dolphin', { title: 'dolphin Search Results', results: thedolphin });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
