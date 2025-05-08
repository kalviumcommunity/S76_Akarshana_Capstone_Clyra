const express = require('express');
const router = express.Router();
const { createTimeCapsule } = require('../controllers/timecapsules.controller');

// Post all time capsules without authentication
router.post('/timecapsules', createTimeCapsule); // No protect middleware

module.exports = router;