const Profile = require("../models/Profile");

exports.saveProfile = async (req, res) => {
  try {
    console.log("body", req.body);
    const profileData = new Profile(req.body);
    const savedProfile = await profileData.save();

    res.status(200).json({
<<<<<<< HEAD
      message: "Profile saved successfully",
      profileId: savedProfile._id,
=======
      message: 'Profile saved successfully',
      profile: savedProfile
>>>>>>> 7ac749df170e699fab1ec97d45d0a2fd92a22573
    });
  } catch (error) {
    console.error("Error saving profile:", error);
    res.status(500).send("Error saving profile");
  }
};

exports.getProfile = async (req, res) => {
  try {
    const profileId = req.params.id;
    const profile = await Profile.findById(profileId);

    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.status(200).json(profile);
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).send("Error fetching profile");
  }
};
