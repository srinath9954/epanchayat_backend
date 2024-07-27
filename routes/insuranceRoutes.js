const express = require('express');
const multer = require('multer');
const Insurance = require('../models/Insurance');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/insurance', upload.single('incomeCertificate'), async (req, res) => {
    try {
        const { name, aadhaarCard, address, annualIncome } = req.body;
        const incomeCertificate = req.file ? req.file.path : null;

        const newInsuranceApplication = new Insurance({
            name,
            aadhaarCard,
            address,
            annualIncome,
            incomeCertificate,
        });

        await newInsuranceApplication.save();
        res.status(201).json({ message: 'Application submitted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
