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
  PieChart,
  Pie,
  Cell,
} from "recharts";
import Header from "@/components/ui/common/header";
import {
  FaUser,
  FaCalendarAlt,
  FaGraduationCap,
  FaBook,
  FaEye,
  FaChalkboardTeacher,
  FaMicrophoneAlt,
  FaFileAlt,
  FaBriefcase,
  FaChartLine,
  FaAward,
  FaClock,
  FaPercentage,
  FaCheckCircle,
  FaTimesCircle,
  FaChevronUp,
  FaChevronDown,
  FaEquals,
} from 'react-icons/fa';

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

const COLORS = ['#10B981', '#EF4444', '#F59E0B'];

const Dashboard = () => {
  const [activeScreen, setActiveScreen] = useState("overview");
  const [studentData, setStudentData] = useState(staticStudentData);
  const [recentQuizData, setRecentQuizData] = useState([]);
  const [quizStats, setQuizStats] = useState(null);
  const [wrongAnswers, setWrongAnswers] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function savequestion(ans) {
    localStorage.setItem("question",ans.question)
    navigate("/bot");
  }
  const calculateQuizStats = (quizData) => {
    if (!quizData || quizData.length === 0) return null;

    const totalQuizzes = quizData.length;
    const totalQuestions = quizData.reduce((sum, quiz) => sum + (quiz.totalQuestions || 0), 0);
    const totalCorrect = quizData.reduce((sum, quiz) => sum + (quiz.correctAnswers?.length || 0), 0);
    const totalWrong = quizData.reduce((sum, quiz) => sum + (quiz.wrongAnswers?.length || 0), 0);
    const totalScore = quizData.reduce((sum, quiz) => sum + (quiz.score || 0), 0);

    const averageScore = totalScore / totalQuizzes;
    const accuracy = (totalCorrect / (totalCorrect + totalWrong)) * 100 || 0;
    const completionRate = (totalQuestions > 0) ? ((totalCorrect + totalWrong) / totalQuestions) * 100 : 0;

    let trend = 'neutral';
    if (quizData.length >= 4) {
      const recentAvg = quizData.slice(0, 3).reduce((sum, q) => sum + q.score, 0) / 3;
      const previousAvg = quizData.slice(3, 6).reduce((sum, q) => sum + q.score, 0) / Math.min(3, quizData.length - 3);
      if (recentAvg > previousAvg + 5) trend = 'improving';
      else if (recentAvg < previousAvg - 5) trend = 'declining';
    }

    const difficultyCount = { easy: 0, medium: 0, hard: 0 };
    quizData.forEach(quiz => {
      quiz.correctAnswers?.forEach(() => difficultyCount.easy++);
      quiz.wrongAnswers?.forEach(() => difficultyCount.medium++);
    });

    return {
      totalQuizzes,
      averageScore: parseFloat(averageScore.toFixed(2)),
      accuracy: parseFloat(accuracy.toFixed(2)),
      completionRate: parseFloat(completionRate.toFixed(2)),
      totalQuestions,
      totalCorrect,
      totalWrong,
      recentDate: new Date(Math.max(...quizData.map(q => new Date(q.createdAt || q.timestamp?.$date || 0)))),
      trend,
      difficultyCount,
      bestScore: Math.max(...quizData.map(q => q.score)),
      worstScore: Math.min(...quizData.map(q => q.score)),
    };
  };

  useEffect(() => {
    if (recentQuizData.length > 0) {
      const stats = calculateQuizStats(recentQuizData);
      setQuizStats(stats);
    }
  }, [recentQuizData]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileId = localStorage.getItem('userid');
        if (!profileId) throw new Error('User ID not found');

        const [studentRes, quizRes] = await Promise.all([
          fetch(`http://localhost:5000/api/get-profile/${profileId}`),
          fetch(`http://localhost:5000/api/get-recent-activity`)
        ]);

        if (!studentRes.ok || !quizRes.ok) throw new Error('Failed to fetch data');

        const [studentData, quizData] = await Promise.all([
          studentRes.json(),
          quizRes.json()
        ]);

        setStudentData(studentData);
        setRecentQuizData(quizData);
      } catch (error) {
        console.error("Error:", error);
        if (error.message === 'User ID not found') {
          navigate('/profile');
        } else {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  if (loading) return <div className="loading-screen flex items-center justify-center h-screen text-white">Loading...</div>;
  if (error) return <div className="error-screen flex items-center justify-center h-screen text-white">Error: {error.message}</div>;

  const performanceData = recentQuizData
    .slice(0, 6)
    .map((quiz, i) => ({
      name: `Quiz ${i + 1}`,
      score: quiz.score,
      date: new Date(quiz.createdAt || quiz.timestamp?.$date).toLocaleDateString(),
    }))
    .reverse();

  const accuracyData = [
    { name: 'Correct', value: quizStats?.totalCorrect || 0 },
    { name: 'Wrong', value: quizStats?.totalWrong || 0 },
  ];

  const difficultyData = quizStats ? [
    { name: 'Easy', value: quizStats.difficultyCount.easy },
    { name: 'Medium', value: quizStats.difficultyCount.medium },
    { name: 'Hard', value: quizStats.difficultyCount.hard },
  ] : [];

  return (
    <div className="dashboard-section min-h-screen w-full bg-gradient-to-br from-gray-900 to-black text-white overflow-auto flex">
      <Header />

      <div className="sidebar w-64 p-6 bg-gray-900 my-10">
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

      <div className="main-content flex-1 p-6 my-12">
        {activeScreen === "overview" && (
          <div className="overview-content space-y-8">
            <div className="stats-overview grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <FaPercentage className="text-blue-300 mr-2 text-xl" />,
                  title: "Average Score",
                  value: quizStats ? `${quizStats.averageScore}%` : "N/A",
                  trend: quizStats?.trend,
                  description: "Your overall performance"
                },
                {
                  icon: <FaAward className="text-blue-300 mr-2 text-xl" />,
                  title: "Best Score",
                  value: quizStats ? `${quizStats.bestScore}%` : "N/A",
                  description: "Your highest achievement"
                },
                {
                  icon: <FaClock className="text-blue-300 mr-2 text-xl" />,
                  title: "Quizzes Taken",
                  value: quizStats?.totalQuizzes || 0,
                  description: `Last on ${quizStats?.recentDate?.toLocaleDateString() || "N/A"}`
                },
                {
                  icon: <FaChartLine className="text-blue-300 mr-2 text-xl" />,
                  title: "Accuracy",
                  value: quizStats ? `${quizStats.accuracy}%` : "N/A",
                  description: quizStats?.accuracy > 75 ? "Excellent!" : "Keep practicing"
                }
              ].map((stat, index) => (
                <div key={index} className="stat-card bg-gray-800 p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
                  <div className="flex items-center">
                    {stat.icon}
                    <h3 className="text-xl font-semibold">{stat.title}</h3>
                  </div>
                  <p className="stat-value text-3xl font-bold mt-2">{stat.value}</p>
                  <div className="flex items-center mt-1">
                    {stat.trend === 'improving' && <FaChevronUp className="text-green-400 mr-1" />}
                    {stat.trend === 'declining' && <FaChevronDown className="text-red-400 mr-1" />}
                    {stat.trend === 'neutral' && <FaEquals className="text-yellow-400 mr-1" />}
                    <p className={`text-sm ${
                      stat.trend === 'improving' ? 'text-green-400' :
                      stat.trend === 'declining' ? 'text-red-400' : 'text-gray-400'
                    }`}>
                      {stat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="charts-container grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="performance-chart bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Performance Trend</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" domain={[0, 100]} />
                    <Tooltip contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151' }} />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="score"
                      stroke="#3B82F6"
                      strokeWidth={2}
                      activeDot={{ r: 8 }}
                      name="Score (%)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="accuracy-chart bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Answer Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={accuracyData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {accuracyData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151' }} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="detailed-results bg-gray-800 p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Detailed Analysis</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="difficulty-analysis">
                  <h4 className="text-lg font-semibold mb-3">Question Difficulty</h4>
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={difficultyData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={60}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {difficultyData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151' }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="score-range">
                  <h4 className="text-lg font-semibold mb-3">Score Range</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-400">Best Score</p>
                      <p className="text-2xl font-bold text-green-400">{quizStats?.bestScore || 0}%</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Worst Score</p>
                      <p className="text-2xl font-bold text-red-400">{quizStats?.worstScore || 0}%</p>
                    </div>
                  </div>
                </div>

                <div className="completion-stats">
                  <h4 className="text-lg font-semibold mb-3">Completion Stats</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-400">Completion Rate</p>
                      <p className="text-2xl font-bold">{quizStats?.completionRate || 0}%</p>
                      <div className="w-full bg-gray-700 h-2 mt-2 rounded-full">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${quizStats?.completionRate || 0}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-400">Total Questions</p>
                      <p className="text-2xl font-bold">{quizStats?.totalQuestions || 0}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="recent-quizzes">
              <h3 className="text-2xl font-bold mb-4">Recent Quiz Results</h3>
              {recentQuizData.length > 0 ? (
                <div className="space-y-4">
                  {recentQuizData.slice(0, 5).map((quiz, index) => (
                    <div key={index} className="quiz-result bg-gray-800 p-4 rounded-lg shadow transition-all duration-300 hover:shadow-lg">
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center">
                          <div className={`w-3 h-3 rounded-full mr-3 ${
                            quiz.score >= 80 ? 'bg-green-500' :
                            quiz.score >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}></div>
                          <h4 className="text-lg font-semibold">
                            Quiz #{recentQuizData.length - index}: Score {quiz.score} 
                          </h4>
                        </div>
                        <span className="text-gray-400 text-sm">
                          {new Date(quiz.createdAt || quiz.timestamp?.$date).toLocaleString()}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="correct-answers bg-gray-700 p-3 rounded-lg">
                          <div className="flex items-center text-green-400 mb-2">
                            <FaCheckCircle className="mr-2" />
                            <h5 className="font-medium">Correct: {quiz.correctAnswers?.length || 0}</h5>
                          </div>
                          <ul className="space-y-1 max-h-32 overflow-y-auto">
                            {quiz.correctAnswers?.map((ans, idx) => (
                              <li key={idx} className="text-sm text-gray-300">
                                <span className="font-medium">Q{idx + 1}:</span> {ans.selectedAnswer}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="wrong-answers bg-gray-700 p-3 rounded-lg cursor-pointer" >
                          <div className="flex items-center text-red-400 mb-2">
                            <FaTimesCircle className="mr-2" />
                            <h5 className="font-medium">Wrong: {quiz.wrongAnswers?.length || 0}</h5>
                          </div>
                          <ul className="space-y-1 max-h-32 overflow-y-auto">
                            {quiz.wrongAnswers?.map((ans, idx) => (
                              <li key={idx} className="text-sm text-gray-300" onClick={()=>savequestion(ans)
                              }>
                                
                                <span className="font-medium">Q{idx + 1}:</span> {ans.selectedAnswer}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-400 bg-gray-800 rounded-lg">
                  No quiz results available. Complete a quiz to see your performance data.
                </div>
              )}
            </div>
          </div>
        )}

        {activeScreen === "studentData" && (
          <div className="student-data-section p-6">
            <div className="profile-card bg-gray-800 p-8 rounded-xl shadow-lg relative">
              <button
                className="edit-button bg-blue-500 text-white px-4 py-2 rounded-full font-semibold absolute top-4 right-4"
                onClick={() => navigate('/profile')}
              >
                Edit Profile
              </button>
              <h3 className="text-3xl font-bold mb-6 text-center">Student Profile</h3>
              <div className="profile-details grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(studentData)
                  .filter(([key]) => !['id', 'v', '_id'].includes(key))
                  .map(([key, value], index) => (
                    <div key={index} className="profile-item flex items-start p-4 bg-gray-900 rounded-lg shadow-inner">
                      <div className="icon-container mt-1 mr-4">
                        {key === 'fullName' && <FaUser className="text-blue-300 text-xl" />}
                        {key === 'age' && <FaCalendarAlt className="text-blue-300 text-xl" />}
                        {key === 'classGrade' && <FaGraduationCap className="text-blue-300 text-xl" />}
                        {key === 'learningStyle' && <FaEye className="text-blue-300 text-xl" />}
                        {key === 'learningPace' && <FaChalkboardTeacher className="text-blue-300 text-xl" />}
                        {key === 'subjectInterest' && <FaBook className="text-blue-300 text-xl" />}
                        {key === 'careerGoal' && <FaBriefcase className="text-blue-300 text-xl" />}
                        {key === 'preferredFormat' && <FaMicrophoneAlt className="text-blue-300 text-xl" />}
                        {key === 'topicsDifficulty' && <FaFileAlt className="text-blue-300 text-xl" />}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </h4>
                        <p className="text-lg mt-2 text-gray-300">
                          {value || 'Not specified'}
                        </p>
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
