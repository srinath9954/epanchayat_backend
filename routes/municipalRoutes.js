const express = require('express');
const multer = require('multer');
const Municipal = require('../models/Municipal');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/municipal', upload.single('document'), async (req, res) => {
    try {
        const { name, email, query } = req.body;
        const document = req.file ? req.file.path : null;

        const newMunicipalQuery = new Municipal({
            name,
            email,
            query,
            document,
        });

        await newMunicipalQuery.save();
        res.status(201).json({ message: 'Query submitted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
