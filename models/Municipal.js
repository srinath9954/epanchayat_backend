const mongoose = require('mongoose');

const municipalSchema = new mongoose.Schema({
    name: String,
    email: String,
    query: String,
    document: String,
});

module.exports = mongoose.model('Municipal', municipalSchema);
