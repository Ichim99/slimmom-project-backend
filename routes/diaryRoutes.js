const express = require('express');
const { addEntry, getDiary } = require('../controllers/diaryController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/add', authMiddleware, addEntry);
router.get('/:date', authMiddleware, getDiary);

module.exports = router;
