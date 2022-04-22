var dolphin = require('../models/dolphin');

// List of all dolphin
exports.dolphin_list = async function (req, res) {
    try {
        thedolphin = await dolphin.find();
        res.send(thedolphin);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific dolphin.
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
// Handle dolphin create on POST.
exports.dolphin_create_post = async function (req, res) {
    console.log(req.body)
    let document = new dolphin();
    document.name = req.body.name;
    document.age = req.body.age;
    document.weight = req.body.weight;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle dolphin delete form on DELETE.
exports.dolphin_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await dolphin.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle dolphin update form on PUT.
exports.dolphin_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await dolphin.findById(req.params.id)
        // Do updates of properties
        if (req.body.name)
            toUpdate.name = req.body.name;
        if (req.body.age) toUpdate.cost = req.body.age;
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
exports.dolphin_view_all_Page = async function (req, res) {
    try {
        thedolphin = await dolphin.find();
        res.render('dolphin', { title: 'dolphin Search Results', results: thedolphin });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle a show one view with id specified by query
exports.dolphin_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await dolphin.findById(req.query.id)
        res.render('dolphindetail',
            { title: 'dolphin Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

exports.dolphin_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('dolphinCreate', { title: 'dolphin Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a dolphin.
// query provides the id
exports.dolphin_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await dolphin.findById(req.query.id)
        res.render('dolphinUpdate', { title: 'dolphin Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.dolphin_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await dolphin.findById(req.query.id)
        res.render('dolphinDelete', {
            title: 'dolphin Delete', toShow:
                result
        });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};