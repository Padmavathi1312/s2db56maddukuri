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
exports.dolphin_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await dolphin.findById(req.params.id)
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
exports.dolphin_update_put = async function (req, res) {
    //res.send('NOT IMPLEMENTED: Dolphin update PUT' + req.params.id);
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await dolphin.findById(req.params.id)
        // Do updates of properties
        if (req.body.name)
            toUpdate.name = req.body.name;
        if (req.body.age) toUpdate.age = req.body.age;
        if (req.body.weight) toUpdate.weight = req.body.weight;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
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
