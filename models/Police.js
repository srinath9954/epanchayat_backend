const mongoose = require('mongoose');

const policeSchema = new mongoose.Schema({
    name: String,
    email: String,
    query: String,
    document: String,
});

module.exports = mongoose.model('Police', policeSchema);
