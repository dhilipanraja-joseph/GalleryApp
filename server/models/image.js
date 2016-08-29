const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  album: { type: String, required: true },
  imgurl: { type: String, required: true},
  addedAt: { type: Date, required: true, default: Date.now }
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
