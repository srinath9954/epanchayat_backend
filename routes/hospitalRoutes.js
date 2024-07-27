const express = require('express');
const multer = require('multer');
const Hospital = require('../models/Hospital');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/hospital', upload.single('document'), async (req, res) => {
    try {
        const { name, hospName, hospitalAddress, query } = req.body;
        const document = req.file ? req.file.path : null;

        const newHospitalQuery = new Hospital({
            name,
            hospName,
            hospitalAddress,
            query,
            document,
        });

        await newHospitalQuery.save();
        res.status(201).json({ message: 'Query submitted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
