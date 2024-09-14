const { Diary } = require('../models/Diary');

const addEntry = async (req, res) => {
  const { date, product, calories } = req.body;
  try {
    const entry = await Diary.create({ date, product, calories, userId: req.user.id });
    res.status(201).json(entry);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getDiary = async (req, res) => {
  const { date } = req.params;
  try {
    const diary = await Diary.find({ userId: req.user.id, date });
    res.status(200).json(diary);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { addEntry, getDiary };
