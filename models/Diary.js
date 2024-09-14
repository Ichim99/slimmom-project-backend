const mongoose = require('mongoose');

const diarySchema = new mongoose.Schema({
  date: String,
  product: String,
  calories: Number,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Diary = mongoose.model('Diary', diarySchema);

module.exports = { Diary };
