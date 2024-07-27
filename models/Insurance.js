const mongoose = require('mongoose');

const insuranceSchema = new mongoose.Schema({
    name: String,
    aadhaarCard: String,
    address: String,
    annualIncome: Number,
    incomeCertificate: String,
});

module.exports = mongoose.model('Insurance', insuranceSchema);
