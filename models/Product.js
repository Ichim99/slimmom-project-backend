const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  calories: Number,
});

const Product = mongoose.model('Product', productSchema);

module.exports = { Product };
