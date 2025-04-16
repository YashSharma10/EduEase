import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import Header from "@/components/ui/common/header";
import { FaUser, FaGraduationCap, FaBook, FaRunning, FaBriefcase, FaEye, FaPen, FaClock, FaCalendarAlt, FaExclamationTriangle, FaMicrophone, FaChalkboard, FaFileAlt } from "react-icons/fa";

const learningStyleOptions = [
  "Visual (Images, diagrams)",
  "Text (Notes, reading)",
];

const classGrades = [
  "Class 1",
  "Class 2",
  "Class 3",
  "Class 4",
  "Class 5",
  "Class 6",
  "Class 7",
  "Class 8",
  "Class 9",
  "Class 10",
  "Class 11",
  "Class 12",
  "College 1st Year",
  "College 2nd Year",
  "College 3rd Year",
  "College 4th Year",
];

const Profile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    classGrade: "Class 1",
    learningStyle: [],
    learningPace: "",
    careerGoal: "",
    subjectInterest: "",
    studyDuration: "",
    frequency: "",
    topicsDifficulty: "",
    voiceLearning: "",
    boardCurriculum: "",
    preferredFormat: "",
  });

  const [showMore, setShowMore] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "learningStyle") {
      setFormData((prev) => ({
        ...prev,
        learningStyle: checked
          ? [...prev.learningStyle, value]
          : prev.learningStyle.filter((style) => style !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const mandatoryFields = [
      "fullName",
      "age",
      "classGrade",
      "learningStyle",
      "learningPace",
      "careerGoal",
    ];
    for (let field of mandatoryFields) {
      if (
        !formData[field] ||
        (field === "learningStyle" && formData.learningStyle.length === 0)
      ) {
        alert("Please fill all mandatory fields.");
        return;
      }
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/save-profile",
        formData
      );
      console.log("Saved Profile ID:", response.data);
      localStorage.setItem("profileId", JSON.stringify(response.data.profile));
      localStorage.setItem("userid", JSON.stringify(response.data.profile._id));
      toast.success(`${response.data.message}`);
      navigate(`/`);
    } catch (error) {
      console.error("Save error:", error);
      alert("Failed to save.");
    }
  };

  return (
    <div className="min-h-screen w-full bg-black text-white relative overflow-hidden">
      <Header />
      {/* Background and Motion Effects */}
      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute inset-0 z-0 bg-[length:400%_400%] bg-gradient-to-r from-[#0c0c0c] via-[#1a1a1a] to-[#0c0c0c]"
        style={{ backgroundSize: "400% 400%" }}
      />

      <motion.div
        animate={{ x: [0, 30, -30, 0], y: [0, -30, 30, 0] }}
        transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
        className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-500 opacity-10 rounded-full filter blur-3xl"
      />

      <motion.div
        animate={{ x: [0, -40, 40, 0], y: [0, 40, -40, 0] }}
        transition={{ repeat: Infinity, duration: 30, ease: "easeInOut" }}
        className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-blue-400 opacity-10 rounded-full filter blur-3xl"
      />

      <div className="relative z-10 max-w-4xl mx-auto p-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 mb-10 text-center"
        >
          Customize Your Learning Experience
        </motion.h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-md rounded-xl shadow-md p-6 space-y-6 text-white"
        >
          <div>
            <label className="block font-medium flex items-center">
              <FaUser className="mr-2" /> Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 w-full bg-black/40 text-white border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block font-medium flex items-center">
              <FaGraduationCap className="mr-2" /> Age *
            </label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="mt-1 w-full bg-black/40 text-white border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              min="5"
              max="25"
              required
            />
          </div>

          <div>
            <label className="block font-medium flex items-center">
              <FaBook className="mr-2" /> Class / Grade *
            </label>
            <select
              name="classGrade"
              value={formData.classGrade}
              onChange={handleChange}
              className="mt-1 w-full bg-black/40 text-white border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {classGrades.map((grade) => (
                <option key={grade} value={grade}>
                  {grade}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1 flex items-center">
              <FaEye className="mr-2" /> Learning Style *
            </label>
            <div className="grid grid-cols-2 gap-2">
              {learningStyleOptions.map((style) => (
                <label key={style} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="learningStyle"
                    value={style}
                    checked={formData.learningStyle.includes(style)}
                    onChange={handleChange}
                    className="form-checkbox h-5 w-5 text-blue-500"
                  />
                  <span className="text-white">{style}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block font-medium flex items-center">
              <FaRunning className="mr-2" /> Learning Pace *
            </label>
            <div className="flex flex-wrap gap-4 mt-2">
              {[
                "Fast Learner",
                "Intermediate Learner",
                "Slow Learner",
                "Variable Learner",
              ].map((pace) => (
                <label key={pace} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="learningPace"
                    value={pace}
                    checked={formData.learningPace === pace}
                    onChange={handleChange}
                    className="form-radio h-5 w-5 text-blue-500"
                  />
                  <span className="text-white">{pace}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block font-medium flex items-center">
              <FaBriefcase className="mr-2" /> Career Goal *
            </label>
            <input
              type="text"
              name="careerGoal"
              value={formData.careerGoal}
              onChange={handleChange}
              className="mt-1 w-full bg-black/40 text-white border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="text-right">
            <button
              type="button"
              className="text-blue-300 underline flex items-center hover:text-blue-400 transition-colors"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Hide Optional Fields" : "Show More"} <FaPen className="ml-1" />
            </button>
          </div>

          {showMore && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "subjectInterest", label: "Subject Interest", icon: <FaBook /> },
                { name: "studyDuration", label: "Study Duration", icon: <FaClock /> },
                {
                  name: "frequency",
                  label: "Frequency of Learning Sessions",
                  icon: <FaCalendarAlt />,
                },
                { name: "topicsDifficulty", label: "Topics Difficulty", icon: <FaExclamationTriangle /> },
                { name: "voiceLearning", label: "Voice Learning", icon: <FaMicrophone /> },
                { name: "boardCurriculum", label: "Board and Curriculum", icon: <FaChalkboard /> },
                { name: "preferredFormat", label: "Preferred Format", icon: <FaFileAlt /> },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block font-medium flex items-center">
                    {field.icon} {field.label}
                  </label>
                  <input
                    type="text"
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className="mt-1 w-full bg-black/40 text-white border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ))}
            </div>
          )}

          <div>
            <button
              type="submit"
              className="w-full mt-4 bg-gradient-to-r from-blue-500 to-blue-300 hover:from-blue-400 hover:to-blue-200 font-semibold text-black py-3 rounded-full transition-transform transform hover:scale-105"
            >
              Save Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
