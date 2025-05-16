const mongoose = require('mongoose');

const MediaSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['photo', 'video', 'audio', 'text', 'link'],
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
  capsule: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TimeCapsule',
    required: true,
  }
});

module.exports = mongoose.model('Media', MediaSchema);
