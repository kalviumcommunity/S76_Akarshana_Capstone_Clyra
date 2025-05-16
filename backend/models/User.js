const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    default: '',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.virtual('capsulesCreated', {
  ref: 'TimeCapsule',
  localField: '_id',
  foreignField: 'creator',
});

UserSchema.virtual('collaborations', {
  ref: 'TimeCapsule',
  localField: '_id',
  foreignField: 'collaborators',
});

module.exports = mongoose.model('User', UserSchema);
