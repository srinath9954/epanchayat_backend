const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const hospitalRoutes = require('./routes/hospitalRoutes');
const insuranceRoutes = require('./routes/insuranceRoutes');
const municipalRoutes = require('./routes/municipalRoutes');
const policeRoutes = require('./routes/policeRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', hospitalRoutes);
app.use('/api', insuranceRoutes);
app.use('/api', municipalRoutes);
app.use('/api', policeRoutes);

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    })
    .catch(error => {
        console.error('Connection error', error.message);
    });
