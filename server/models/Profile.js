const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  age: { type: Number, required: true },
  classGrade: { type: String, required: true },
  learningStyle: { type: String, required: true },
  learningPace: { type: String, required: true },
  subjectInterest: String,
  studyDuration: String,
  frequency: String,
  topicsDifficulty: String,
  voiceLearning: String,
  boardCurriculum: String,
  preferredFormat: String,
  careerGoal: String,
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
