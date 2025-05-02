
// @desc    Create a new time capsule
// @route   POST /api/timecapsules
// @access  Private
exports.createTimeCapsule = async (req, res) => {
  try {
    const { 
      title, 
      description, 
      unlockDate, 
      isPrivate = false, 
      isLocked = true,
      collaborators = [] 
    } = req.body;

    // Basic validation
    if (!title || !unlockDate) {
      return res.status(400).json({
        success: false,
        message: 'Please provide title and unlock date'
      });
    }

    // Create new time capsule
    const newTimeCapsule = await TimeCapsule.create({
      title,
      description,
      creator: req.user.id,
      unlockDate: new Date(unlockDate),
      isPrivate,
      isLocked,
      collaborators,
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
    
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};