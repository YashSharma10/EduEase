const Profile = require("../models/Profile");

exports.saveProfile = async (req, res) => {
  try {
    console.log("body", req.body);
    const profileData = new Profile(req.body);
    const savedProfile = await profileData.save();

    res.status(200).json({
      message: "Profile saved successfully",
      profileId: savedProfile._id,
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
