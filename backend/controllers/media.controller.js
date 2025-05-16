const Media = require('../models/MediaModel');
const TimeCapsule = require('../models/TimeCapsuleModel');

/**
 * @desc 
 * @route 
 */
exports.addMediaToCapsule = async (req, res) => {
  try {
    const capsuleId = req.params.id;

    
    const capsule = await TimeCapsule.findById(capsuleId);
    if (!capsule) {
      return res.status(404).json({ message: 'Time capsule not found' });
    }

    
    const media = new Media({
      type: req.body.type,
      url: req.body.url,
      capsule: capsuleId,
    });

    await media.save();

    capsule.media.push(media._id);
    await capsule.save();

    res.status(201).json({ message: 'Media added successfully', media });
  } catch (error) {
    console.error('Error adding media:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

/**
 * @desc Get all media for a capsule
 * @route GET /api/timecapsules/:id/media
 */
exports.getMediaByCapsule = async (req, res) => {
  try {
    const capsuleId = req.params.id;

    const media = await Media.find({ capsule: capsuleId });

    if (!media || media.length === 0) {
      return res.status(404).json({ message: 'No media found for this capsule' });
    }

    res.json(media);
  } catch (error) {
    console.error('Error fetching media:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

/**
 * @desc Delete media by ID
 * @route DELETE /api/media/:mediaId
 */
exports.deleteMedia = async (req, res) => {
  try {
    const media = await Media.findById(req.params.mediaId);
    if (!media) {
      return res.status(404).json({ message: 'Media not found' });
    }

    
    await TimeCapsule.findByIdAndUpdate(media.capsule, {
      $pull: { media: media._id },
    });

    await media.remove();

    res.json({ message: 'Media deleted successfully' });
  } catch (error) {
    console.error('Error deleting media:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
