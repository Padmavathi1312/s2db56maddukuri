const mongoose = require("mongoose")
const dolphinSchema = mongoose.Schema({
name: String,
age: String,
weight: {type: Number, min: 20, max: 10000 }
})
module.exports = mongoose.model("dolphin",dolphinSchema)