const Profile = require('../models/Profile');

exports.saveProfile = async (req, res) => {
  try {
    console.log("body", req.body);
    const profileData = new Profile(req.body);
    const savedProfile = await profileData.save();

    res.status(200).json({
      message: 'Profile saved successfully',
      profile: savedProfile
    });
  } catch (error) {
    console.error('Error saving profile:', error);
    res.status(500).send('Error saving profile');
  }
};
