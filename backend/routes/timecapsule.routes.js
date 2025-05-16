const express = require('express');
const router = express.Router();

const {
  createTimeCapsule
} = require('../controllers/timecapsules.controller');

const {
  addMediaToCapsule,
  getMediaByCapsule,
  deleteMedia,
} = require('../controllers/media.controller');

router.post('/timecapsules', createTimeCapsule);
router.post('/timecapsules/:id/media', addMediaToCapsule);
router.get('/timecapsules/:id/media', getMediaByCapsule);
router.delete('/media/:mediaId', deleteMedia);

module.exports = router;
