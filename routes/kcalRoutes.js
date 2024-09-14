const express = require('express');
const { getDailyKcal, saveKcalInfo } = require('../controllers/kcalController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', getDailyKcal);
router.post('/', authMiddleware, saveKcalInfo);

module.exports = router;
