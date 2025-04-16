import { useState } from "react";
import "./profile.css";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

// Mock data for the charts
// const learningStyleData = [
//   { name: "Visual", value: 40 },
//   { name: "Auditory", value: 25 },
//   { name: "Reading", value: 20 },
//   { name: "Kinesthetic", value: 15 },
// ];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Profile = () => {
  const [formData, setFormData] = useState({
    fullName: "Yash Sharma",
    age: "18",
    classGrade: "Class 1",
    learningStyle: "Text (Notes, reading)",
    learningPace: "",
    subjectInterest: "",
    studyDuration: "",
    frequency: "",
    topicsDifficulty: "",
    voiceLearning: "",
    boardCurriculum: "",
    preferredFormat: "",
    careerGoal: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/save-profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Profile saved successfully!");
      } else {
        alert("Failed to save profile.");
      }
    } catch (error) {
      console.error("Error saving profile:", error);
    }
  };

  return (
    <div className="profile-section">
      <div className="profile-header">
        <div className="profile-avatar">
          <img src="https://placehold.co/150x150" alt="User Avatar" />
        </div>
        <div className="profile-info">
          <h2>Alex Johnson</h2>
          <p className="profile-email">alex.johnson@example.com</p>
          <p className="profile-joined">Member since: January 2023</p>
          <button className="edit-profile-btn">Edit Profile</button>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            min="5"
            max="25"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="classGrade">Class / Grade Level</label>
          <select
            id="classGrade"
            name="classGrade"
            value={formData.classGrade}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Class 1">Class 1</option>
            <option value="Class 2">Class 2</option>
            <option value="Class 3">Class 3</option>
            <option value="Class 4">Class 4</option>
            <option value="Class 5">Class 5</option>
            <option value="Class 6">Class 6</option>
            <option value="Class 7">Class 7</option>
            <option value="Class 8">Class 8</option>
            <option value="Class 9">Class 9</option>
            <option value="Class 10">Class 10</option>
            <option value="Class 11">Class 11</option>
            <option value="Class 12">Class 12</option>
            <option value="College 1st Year">College 1st Year</option>
            <option value="College 2nd Year">College 2nd Year</option>
            <option value="College 3rd Year">College 3rd Year</option>
            <option value="College 4th Year">College 4th Year</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="learningStyle">Learning Style</label>
          <select
            id="learningStyle"
            name="learningStyle"
            value={formData.learningStyle}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Visual">Visual (Videos, diagrams)</option>
            <option value="Text">Text (Notes, reading)</option>
            <option value="Auditory">Auditory (Listening, discussions)</option>
            <option value="Kinesthetic">Kinesthetic (Hands-on activities)</option>
            <option value="Social">Social (Group learning, discussions)</option>
            <option value="Solitary">Solitary (Independent study)</option>
          </select>
        </div>
        <div className="form-group">
          <label>Learning Pace</label>
          <div>
            <label>
              <input
                type="radio"
                name="learningPace"
                value="Fast Learner"
                checked={formData.learningPace === "Fast Learner"}
                onChange={handleChange}
                required
              />
              Fast Learner
            </label>
            <label>
              <input
                type="radio"
                name="learningPace"
                value="Intermediate Learner"
                checked={formData.learningPace === "Intermediate Learner"}
                onChange={handleChange}
              />
              Intermediate Learner
            </label>
            <label>
              <input
                type="radio"
                name="learningPace"
                value="Slow Learner"
                checked={formData.learningPace === "Slow Learner"}
                onChange={handleChange}
              />
              Slow Learner
            </label>
            <label>
              <input
                type="radio"
                name="learningPace"
                value="Variable Learner"
                checked={formData.learningPace === "Variable Learner"}
                onChange={handleChange}
              />
              Variable Learner
            </label>
          </div>
        </div>
        {/* Optional fields */}
        <div className="form-group">
          <label htmlFor="subjectInterest">Subject Interest</label>
          <input
            type="text"
            id="subjectInterest"
            name="subjectInterest"
            value={formData.subjectInterest}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="studyDuration">Study Duration</label>
          <input
            type="text"
            id="studyDuration"
            name="studyDuration"
            value={formData.studyDuration}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="frequency">Frequency of Learning Sessions</label>
          <input
            type="text"
            id="frequency"
            name="frequency"
            value={formData.frequency}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="topicsDifficulty">Topics Difficulty</label>
          <input
            type="text"
            id="topicsDifficulty"
            name="topicsDifficulty"
            value={formData.topicsDifficulty}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="voiceLearning">Voice Learning</label>
          <input
            type="text"
            id="voiceLearning"
            name="voiceLearning"
            value={formData.voiceLearning}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="boardCurriculum">Board and Curriculum</label>
          <input
            type="text"
            id="boardCurriculum"
            name="boardCurriculum"
            value={formData.boardCurriculum}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="preferredFormat">Preferred Learning Format</label>
          <input
            type="text"
            id="preferredFormat"
            name="preferredFormat"
            value={formData.preferredFormat}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="careerGoal">Career Goal</label>
          <input
            type="text"
            id="careerGoal"
            name="careerGoal"
            value={formData.careerGoal}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Save Profile" />
        </div>
      </form>

      {/* <div className="learning-style-section">
        <h3>Learning Style Preferences</h3>
        <div className="learning-style-chart">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={learningStyleData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {learningStyleData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="learning-style-details">
          <div className="learning-style-item">
            <span className="style-color" style={{ backgroundColor: COLORS[0] }}></span>
            <span className="style-name">Visual</span>
            <span className="style-description">Learns best through images, diagrams, and spatial understanding</span>
          </div>
          <div className="learning-style-item">
            <span className="style-color" style={{ backgroundColor: COLORS[1] }}></span>
            <span className="style-name">Auditory</span>
            <span className="style-description">Learns best through listening and verbal discussions</span>
          </div>
          <div className="learning-style-item">
            <span className="style-color" style={{ backgroundColor: COLORS[2] }}></span>
            <span className="style-name">Reading</span>
            <span className="style-description">Learns best through reading and writing information</span>
          </div>
          <div className="learning-style-item">
            <span className="style-color" style={{ backgroundColor: COLORS[3] }}></span>
            <span className="style-name">Kinesthetic</span>
            <span className="style-description">Learns best through hands-on activities and experiences</span>
          </div>
        </div>

        <div className="learning-preferences">
          <h4>Personalization Settings</h4>
          <div className="preference-item">
            <label>Content Format Preference:</label>
            <select>
              <option>Visual-focused content</option>
              <option>Audio lectures</option>
              <option>Text-based materials</option>
              <option>Interactive exercises</option>
            </select>
          </div>
          <div className="preference-item">
            <label>Study Session Duration:</label>
            <select>
              <option>15-30 minutes</option>
              <option>30-45 minutes</option>
              <option>45-60 minutes</option>
              <option>60+ minutes</option>
            </select>
          </div>
          <div className="preference-item">
            <label>Difficulty Level:</label>
            <select>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
              <option>Expert</option>
            </select>
          </div>
          <button className="save-preferences-btn">Save Preferences</button>
        </div>
      </div> */}
    </div>
  );
};

export default Profile;
