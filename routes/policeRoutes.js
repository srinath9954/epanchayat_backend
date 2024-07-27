const express = require('express');
const multer = require('multer');
const Police = require('../models/Police');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/police', upload.single('document'), async (req, res) => {
    try {
        const { name, email, query } = req.body;
        const document = req.file ? req.file.path : null;

        const newPoliceQuery = new Police({
            name,
            email,
            query,
            document,
        });

        await newPoliceQuery.save();
        res.status(201).json({ message: 'Query submitted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
