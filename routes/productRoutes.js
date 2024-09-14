const express = require('express');
const { searchProduct, addProduct } = require('../controllers/productController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/search', searchProduct);
router.post('/add', authMiddleware, addProduct);

module.exports = router;
