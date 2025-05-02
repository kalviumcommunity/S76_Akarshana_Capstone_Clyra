const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth.middleware');
const { 
  getAllTimeCapsules,
  getTimeCapsuleById,
  getTimeCapsuleContents
} = require('../controllers/timecapsules.controller');

// GET all time capsules for current user
router.get('/', protect, getAllTimeCapsules);

// GET specific time capsule by ID
router.get('/:id', protect, getTimeCapsuleById);

// GET contents of a specific time capsule
router.get('/:id/contents', protect, getTimeCapsuleContents);

module.exports = router;