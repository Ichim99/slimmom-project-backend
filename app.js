const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const authRoutes = require('./routes/authRoutes');
const kcalRoutes = require('./routes/kcalRoutes');
const productRoutes = require('./routes/productRoutes');
const diaryRoutes = require('./routes/diaryRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/auth', authRoutes);
app.use('/api/kcal', kcalRoutes);
app.use('/api/products', productRoutes);
app.use('/api/diary', diaryRoutes);

module.exports = app;
