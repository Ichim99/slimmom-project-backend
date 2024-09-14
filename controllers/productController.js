const { Product } = require('../models/Product');

const searchProduct = async (req, res) => {
  const { query } = req.query;
  try {
    const products = await Product.find({ name: { $regex: query, $options: 'i' } });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const addProduct = async (req, res) => {
  const { name, calories } = req.body;
  try {
    const newProduct = await Product.create({ name, calories });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { searchProduct, addProduct };
