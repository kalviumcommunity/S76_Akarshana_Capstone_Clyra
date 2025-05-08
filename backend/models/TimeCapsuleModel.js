const mongoose= require('mongoose');

const TimeCapsuleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique:true
  },
  description: {
    type: String,
    
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref:  'User',
    required: true,
  },
  unlockedDate: {
    type: Date,
    required: true,
  },
  isPrivate: {
    type: Boolean,
    default: false,
  },
  isLocked: {
    type: Boolean,
    default: true,
  },
  collaborators:[{
    type:mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
    creationDate: {
        type: Date,
        default: Date.now,
    },

});

module.exports = mongoose.model('TimeCapsule', TimeCapsuleSchema); 
