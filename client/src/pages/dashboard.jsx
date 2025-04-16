import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import Header from "@/components/ui/common/header";
import {
  FaUser,
  FaCalendarAlt,
  FaGraduationCap,
  FaBook,
  FaIdCard,
  FaEye,
  FaChalkboardTeacher,
  FaMicrophoneAlt,
  FaFileAlt,
  FaBriefcase,
} from 'react-icons/fa'; // Import icons

// Mock data for the charts
const learningProgressData = [
  { name: "Week 1", progress: 20 },
  { name: "Week 2", progress: 35 },
  { name: "Week 3", progress: 45 },
  { name: "Week 4", progress: 60 },
  { name: "Week 5", progress: 75 },
  { name: "Week 6", progress: 85 },
];

// Static data to be used if API data is not available
const staticStudentData = {
  fullName: "Yash Sharma",
  age: 20,
  classGrade: "Class 9",
  learningStyle: "Visual (Images, diagrams)",
  learningPace: "Fast Learner",
  subjectInterest: "Science",
  studyDuration: "2 hours",
  topicsDifficulty: "Moderate",
  boardCurriculum: "CBSE",
  careerGoal: "Developer",
  preferredFormat: "Video",
};

const Dashboard = () => {
  const [activeScreen, setActiveScreen] = useState("overview");
  const [studentData, setStudentData] = useState(staticStudentData);
  const [recentQuizData, setRecentQuizData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileId = localStorage.getItem('userid'); // Fetch user ID from local storage
        if (!profileId) {
          throw new Error('User ID not found in local storage');
        }

        const studentResponse = await fetch(`http://localhost:5000/api/get-profile/${profileId}`);
        if (!studentResponse.ok) {
          throw new Error('Network response was not ok');
        }
        const studentData = await studentResponse.json();
        setStudentData(studentData);

        const quizResponse = await fetch(`http://localhost:5000/api/get-recent-activity`);
        if (!quizResponse.ok) {
          throw new Error('Network response was not ok');
        }
        const quizData = await quizResponse.json();
        setRecentQuizData(quizData);
      } catch (error) {
        console.error("Error fetching data:", error);
        if (error.message === 'User ID not found in local storage') {
          navigate('/profile'); // Redirect to the profile page
        } else {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  if (loading) {
    return <div className="loading-screen flex items-center justify-center h-screen text-white">Loading...</div>;
  }

  if (error) {
    return <div className="error-screen flex items-center justify-center h-screen text-white">Error: {error.message}</div>;
  }

  return (
    <div className="dashboard-section min-h-screen w-full bg-gradient-to-br from-gray-900 to-black text-white overflow-auto flex">
      <Header />
      <div className="sidebar w-64 p-6 bg-gray-900 my-10">
        <h2 className="text-2xl font-bold text-blue-300 mb-6 ">Learning Dashboard</h2>
        <button
          className={`sidebar-button px-4 py-2 rounded-full font-semibold mb-4 w-full text-left ${activeScreen === "overview" ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"}`}
          onClick={() => setActiveScreen("overview")}
        >
          Overview
        </button>
        <button
          className={`sidebar-button px-4 py-2 rounded-full font-semibold mb-4 w-full text-left ${activeScreen === "studentData" ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"}`}
          onClick={() => setActiveScreen("studentData")}
        >
          Student Data
        </button>
        <button
          className={`sidebar-button px-4 py-2 rounded-full font-semibold mb-4 w-full text-left ${activeScreen === "studentData" ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"}`}
          onClick={() => setActiveScreen("#")}
        >
          Update data to cloud
        </button>
      </div>

      <div className="main-content flex-1 p-6 my-12">
        {activeScreen === "overview" && (
          <div className="overview-content">
            <div className="stats-overview grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="stat-card bg-gray-800 p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold">Total Learning Hours</h3>
                <p className="stat-value text-3xl font-bold mt-2">42.5</p>
                <p className="stat-change text-green-400 mt-1">+3.5 hrs this week</p>
              </div>
              <div className="stat-card bg-gray-800 p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold">Courses Completed</h3>
                <p className="stat-value text-3xl font-bold mt-2">7</p>
                <p className="stat-change text-green-400 mt-1">+1 this month</p>
              </div>
              <div className="stat-card bg-gray-800 p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold">Average Quiz Score</h3>
                <p className="stat-value text-3xl font-bold mt-2">83%</p>
                <p className="stat-change text-green-400 mt-1">+5% improvement</p>
              </div>
              <div className="stat-card bg-gray-800 p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold">Learning Streak</h3>
                <p className="stat-value text-3xl font-bold mt-2">12 days</p>
                <p className="stat-change mt-1">Keep it up!</p>
              </div>
            </div>

            <div className="chart-container mt-8">
              <h3 className="text-2xl font-bold mb-4">Learning Progress Over Time</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={learningProgressData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="progress" stroke="#10b981" activeDot={{ r: 8 }} name="Progress (%)" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="recent-activity mt-8">
              <h3 className="text-2xl font-bold mb-4">Recent Activity</h3>
              <div className="activity-list space-y-4">
                {recentQuizData.map((activity, index) => (
                  <div key={index} className="activity-item flex items-center transition-transform duration-300 hover:scale-105">
                    <div className={`activity-icon ${activity.score > 0 ? 'completed bg-green-500' : 'wrong bg-red-500'} text-white rounded-full p-2 mr-4`}>
                      {activity.score > 0 ? '✓' : '✗'}
                    </div>
                    <div className="activity-details">
                      <h4 className="text-lg font-semibold">{activity.score > 0 ? "Correct Answers" : "Wrong Answers"}</h4>
                      <ul>
                        {activity.score > 0
                          ? activity.correctAnswers.map((answer, idx) => (
                              <li key={idx}>{answer.question}: {answer.selectedAnswer}</li>
                            ))
                          : activity.wrongAnswers.map((answer, idx) => (
                              <li key={idx}>{answer.question}: {answer.selectedAnswer}</li>
                            ))}
                      </ul>
                      <p className="text-gray-400">{new Date(activity.timestamp.$date).toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeScreen === "studentData" && (
          <div className="student-data-section p-6">
            <div className="profile-card bg-gray-800 p-8 rounded-xl shadow-lg relative text-white">
              <button
                className="edit-button bg-blue-500 text-white px-4 py-2 rounded-full font-semibold absolute top-4 right-4"
                onClick={() => navigate('/profile')}
              >
                Edit
              </button>
              <h3 className="text-3xl font-bold mb-6 text-center">Student Profile</h3>
              <div className="profile-details grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(studentData)
                  .filter(([key]) => key !== 'id' && key !== 'v') // Filter out 'id' and 'v' fields
                  .map(([key, value], index) => (
                    <div key={index} className="profile-item flex items-center p-4 bg-gray-900 rounded-lg shadow-inner">
                      {key === 'fullName' && <FaUser className="mr-3 text-blue-300" />}
                      {key === 'age' && <FaCalendarAlt className="mr-3 text-blue-300" />}
                      {key === 'classGrade' && <FaGraduationCap className="mr-3 text-blue-300" />}
                      {key === 'learningStyle' && <FaEye className="mr-3 text-blue-300" />}
                      {key === 'learningPace' && <FaChalkboardTeacher className="mr-3 text-blue-300" />}
                      {key === 'subjectInterest' && <FaBook className="mr-3 text-blue-300" />}
                      {key === 'careerGoal' && <FaBriefcase className="mr-3 text-blue-300" />}
                      {key === 'preferredFormat' && <FaMicrophoneAlt className="mr-3 text-blue-300" />}
                      {key === 'topicsDifficulty' && <FaFileAlt className="mr-3 text-blue-300" />}
                      <div>
                        <h4 className="text-lg font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</h4>
                        <p className="text-lg mt-2 text-gray-300">{value}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
