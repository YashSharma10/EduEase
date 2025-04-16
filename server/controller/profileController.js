const Profile = require('../models/Profile');

exports.saveProfile = async (req, res) => {
  try {
    const profileData = new Profile(req.body);
    await profileData.save();
    res.status(200).send('Profile saved successfully');
  } catch (error) {
    res.status(500).send('Error saving profile');
  }
};
