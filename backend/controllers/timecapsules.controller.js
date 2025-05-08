const mongoose = require('mongoose');
const TimeCapsule = require('../models/TimeCapsuleModel');

exports.createTimeCapsule = async (req, res) => {
  try {
    const { 
      title, 
      description, 
      unlockedDate, 
      isPrivate = false, 
      isLocked = true,
      collaborators = [],
      creator // Allow creator to be passed in the request body
    } = req.body;

    // Basic validation
    if (!title || !unlockedDate || !creator) {
      return res.status(400).json({
        success: false,
        message: 'Please provide title, unlockedDate, and creator'
      });
    }

    // Validate and cast collaborators to ObjectId
    const validCollaborators = collaborators.map((id) => {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error(`Invalid collaborator ID: ${id}`);
      }
      return new mongoose.Types.ObjectId(id);
    });

    // Create new time capsule
    const newTimeCapsule = await TimeCapsule.create({
      title,
      description,
      creator, // Use creator from the request body
      unlockedDate: new Date(unlockedDate), // Ensure it's a valid date
      isPrivate,
      isLocked,
      collaborators: validCollaborators,
      creationDate: Date.now()
    });

    // Return the created time capsule
    res.status(201).json({
      success: true,
      data: newTimeCapsule
    });
  } catch (error) {
    console.error(error);

    // Handle duplicate key error
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'A time capsule with that title already exists'
      });
    }

    // Handle invalid collaborator ID error
    if (error.message && error.message.startsWith('Invalid collaborator ID')) {
      return res.status(400).json({
        success: false,
        message: error.message
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};