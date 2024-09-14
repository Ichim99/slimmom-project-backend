const { Kcal } = require('../models/Kcal');

const getDailyKcal = async (req, res) => {
  try {
    const kcalData = await Kcal.find({});
    res.status(200).json(kcalData);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const saveKcalInfo = async (req, res) => {
  const { userId, kcal } = req.body;
  try {
    const newKcalEntry = await Kcal.create({ userId, kcal });
    res.status(201).json(newKcalEntry);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getDailyKcal, saveKcalInfo };
