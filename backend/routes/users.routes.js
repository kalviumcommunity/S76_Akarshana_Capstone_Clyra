const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserProfile, getAllUsers, updateUserProfile } = require('../controllers/users.controller');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile/:id', getUserProfile);  
router.get('/', getAllUsers);
router.put('/:id', updateUserProfile); 


module.exports = router;
