// config/db.js
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    const dbUri = process.env.DB_HOST; // URI-ul din .env
    if (!dbUri) {
      throw new Error('MongoDB URI is not defined');
    }
    await mongoose.connect(dbUri); // Elimină opțiunile useNewUrlParser și useUnifiedTopology
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

module.exports = connectDB;
