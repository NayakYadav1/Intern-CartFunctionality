const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json())

// app.use('/users', userRoutes);
// app.use('/orders', orderRoutes);

app.listen(port, () => {
    console.log(`Server Successfully Started on ${port}`);
})