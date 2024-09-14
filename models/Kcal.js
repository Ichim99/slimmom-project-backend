const mongoose = require('mongoose');

const kcalSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  kcal: Number,
});

const Kcal = mongoose.model('Kcal', kcalSchema);

module.exports = { Kcal };
