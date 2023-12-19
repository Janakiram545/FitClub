const mongoose = require('mongoose');

const CaloriesSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'employees' }, // Reference to the employees collection
  date: { type: Date, default: Date.now },
  caloriesConsumed: Number,
});

const CaloriesModel = mongoose.model('calories', CaloriesSchema);

module.exports = CaloriesModel;


