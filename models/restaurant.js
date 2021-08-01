const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  image: { type: String, required: true },
  AOCounter: { type: Number, required: true},
  MOCounter: { type: Number, required: true},
  food: [{ type: mongoose.Types.ObjectId, required: true, ref: 'Food' }]
});


module.exports = mongoose.model('Restaurant', restaurantSchema);