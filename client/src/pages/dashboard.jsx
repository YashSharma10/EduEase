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
  name: "John Doe",
  age: 20,
  grade: "A",
  courses: ["Math", "Science", "History"],
};

const Dashboard = () => {
  const [activeScreen, setActiveScreen] = useState("overview");
  const [studentData, setStudentData] = useState(staticStudentData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const profileId = localStorage.getItem('userid'); // Fetch user ID from local storage
        if (!profileId) {
          throw new Error('User ID not found in local storage');
        }

        const response = await fetch(`http://localhost:5000/api/get-profile/${profileId}`); // Replace with your actual API endpoint
        console.log(profileId); // Log the response for debugging
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setStudentData(data);
      } catch (error) {
        console.error("Error fetching student data:", error);
        if (error.message === 'User ID not found in local storage') {
          navigate('/profile'); // Redirect to the profile page
        } else {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchStudentData();
  }, [navigate]);

  if (loading) {
    return <div className="loading-screen flex items-center justify-center h-screen text-white">Loading...</div>;
  }

  if (error) {
    return <div className="error-screen flex items-center justify-center h-screen text-white">Error: {error.message}</div>;
  }

  return (
    <div className="dashboard-section min-h-screen w-full bg-gradient-to-br from-gray-900 to-black text-white overflow-auto flex">
      <div className="sidebar w-64 p-6 bg-gray-900">
        <h2 className="text-2xl font-bold text-blue-300 mb-6">Learning Dashboard</h2>
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
      </div>

      <div className="main-content flex-1 p-6">
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
                <div className="activity-item flex items-center transition-transform duration-300 hover:scale-105">
                  <div className="activity-icon completed bg-green-500 text-white rounded-full p-2 mr-4">✓</div>
                  <div className="activity-details">
                    <h4 className="text-lg font-semibold">Completed "Introduction to Algebra"</h4>
                    <p className="text-gray-400">2 hours ago</p>
                  </div>
                </div>
                <div className="activity-item flex items-center transition-transform duration-300 hover:scale-105">
                  <div className="activity-icon quiz bg-blue-500 text-white rounded-full p-2 mr-4">Q</div>
                  <div className="activity-details">
                    <h4 className="text-lg font-semibold">Scored 95% on "Science Quiz 5"</h4>
                    <p className="text-gray-400">Yesterday</p>
                  </div>
                </div>
                <div className="activity-item flex items-center transition-transform duration-300 hover:scale-105">
                  <div className="activity-icon started bg-yellow-500 text-white rounded-full p-2 mr-4">▶</div>
                  <div className="activity-details">
                    <h4 className="text-lg font-semibold">Started "World History: Ancient Civilizations"</h4>
                    <p className="text-gray-400">2 days ago</p>
                  </div>
                </div>
                <div className="activity-item flex items-center transition-transform duration-300 hover:scale-105">
                  <div className="activity-icon achievement bg-purple-500 text-white rounded-full p-2 mr-4">🏆</div>
                  <div className="activity-details">
                    <h4 className="text-lg font-semibold">Earned "Consistent Learner" badge</h4>
                    <p className="text-gray-400">3 days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeScreen === "studentData" && (
          <div className="student-data-section">
            <div className="profile-card bg-gray-800 p-6 rounded-xl shadow-lg relative">
              <button className="edit-button bg-blue-500 text-white px-4 py-2 rounded-full font-semibold absolute top-4 right-4">
                Edit
              </button>
              <h3 className="text-2xl font-bold mb-4">Student Profile</h3>
              <div className="profile-details grid grid-cols-1 md:grid-cols-2 gap-4">
                {studentData && Object.entries(studentData).map(([key, value], index) => (
                  <div key={index} className="profile-item">
                    <h4 className="text-lg font-semibold capitalize">{key.replace(/_/g, ' ')}</h4>
                    <p className="text-lg mt-2">{typeof value === 'string' ? value : Array.isArray(value) ? value.join(', ') : value}</p>
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
