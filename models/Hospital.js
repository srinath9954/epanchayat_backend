const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
    name: String,
    hospName: String,
    hospitalAddress: String,
    query: String,
    document: String,
});

module.exports = mongoose.model('Hospital', hospitalSchema);
