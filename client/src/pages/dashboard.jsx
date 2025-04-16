"use client"

import { useState } from "react"
import "./Dashboard.css"
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
} from "recharts"

// Mock data for the charts
const learningProgressData = [
  { name: "Week 1", progress: 20 },
  { name: "Week 2", progress: 35 },
  { name: "Week 3", progress: 45 },
  { name: "Week 4", progress: 60 },
  { name: "Week 5", progress: 75 },
  { name: "Week 6", progress: 85 },
]

const subjectProgressData = [
  { name: "Math", completed: 75, total: 100 },
  { name: "Science", completed: 60, total: 100 },
  { name: "History", completed: 45, total: 100 },
  { name: "Language", completed: 90, total: 100 },
]

const quizScoresData = [
  { name: "Quiz 1", score: 85 },
  { name: "Quiz 2", score: 70 },
  { name: "Quiz 3", score: 90 },
  { name: "Quiz 4", score: 75 },
  { name: "Quiz 5", score: 95 },
]

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="dashboard-section">
      <div className="dashboard-header">
        <h2>Learning Dashboard</h2>
        <div className="dashboard-tabs">
          <button className={activeTab === "overview" ? "active" : ""} onClick={() => setActiveTab("overview")}>
            Overview
          </button>
          <button className={activeTab === "progress" ? "active" : ""} onClick={() => setActiveTab("progress")}>
            Progress
          </button>
          <button
            className={activeTab === "recommendations" ? "active" : ""}
            onClick={() => setActiveTab("recommendations")}
          >
            Recommendations
          </button>
        </div>
      </div>

      {activeTab === "overview" && (
        <div className="dashboard-content">
          <div className="stats-overview">
            <div className="stat-card">
              <h3>Total Learning Hours</h3>
              <p className="stat-value">42.5</p>
              <p className="stat-change positive">+3.5 hrs this week</p>
            </div>
            <div className="stat-card">
              <h3>Courses Completed</h3>
              <p className="stat-value">7</p>
              <p className="stat-change positive">+1 this month</p>
            </div>
            <div className="stat-card">
              <h3>Average Quiz Score</h3>
              <p className="stat-value">83%</p>
              <p className="stat-change positive">+5% improvement</p>
            </div>
            <div className="stat-card">
              <h3>Learning Streak</h3>
              <p className="stat-value">12 days</p>
              <p className="stat-change">Keep it up!</p>
            </div>
          </div>

          <div className="chart-container">
            <h3>Learning Progress Over Time</h3>
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

          <div className="recent-activity">
            <h3>Recent Activity</h3>
            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-icon completed">✓</div>
                <div className="activity-details">
                  <h4>Completed "Introduction to Algebra"</h4>
                  <p>2 hours ago</p>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon quiz">Q</div>
                <div className="activity-details">
                  <h4>Scored 95% on "Science Quiz 5"</h4>
                  <p>Yesterday</p>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon started">▶</div>
                <div className="activity-details">
                  <h4>Started "World History: Ancient Civilizations"</h4>
                  <p>2 days ago</p>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon achievement">🏆</div>
                <div className="activity-details">
                  <h4>Earned "Consistent Learner" badge</h4>
                  <p>3 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "progress" && (
        <div className="dashboard-content">
          <div className="subject-progress">
            <h3>Subject Progress</h3>
            <div className="progress-bars">
              {subjectProgressData.map((subject, index) => (
                <div className="subject-progress-item" key={index}>
                  <div className="subject-info">
                    <span className="subject-name">{subject.name}</span>
                    <span className="subject-percentage">{subject.completed}%</span>
                  </div>
                  <div className="progress-bar-container">
                    <div className="progress-bar-fill" style={{ width: `${subject.completed}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="chart-container">
            <h3>Quiz Performance</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={quizScoresData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <Bar dataKey="score" fill="#10b981" name="Score (%)" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="skill-mastery">
            <h3>Skill Mastery</h3>
            <div className="skill-grid">
              <div className="skill-card mastered">
                <h4>Basic Algebra</h4>
                <p className="skill-status">Mastered</p>
                <p className="skill-date">Completed: June 15, 2023</p>
              </div>
              <div className="skill-card in-progress">
                <h4>Chemical Reactions</h4>
                <p className="skill-status">In Progress (75%)</p>
                <p className="skill-date">Started: July 2, 2023</p>
              </div>
              <div className="skill-card mastered">
                <h4>Essay Writing</h4>
                <p className="skill-status">Mastered</p>
                <p className="skill-date">Completed: May 20, 2023</p>
              </div>
              <div className="skill-card not-started">
                <h4>World Geography</h4>
                <p className="skill-status">Not Started</p>
                <p className="skill-date">Recommended</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "recommendations" && (
        <div className="dashboard-content">
          <div className="recommendations-intro">
            <h3>Personalized Recommendations</h3>
            <p>Based on your learning style and progress, we recommend the following resources:</p>
          </div>

          <div className="recommendation-section">
            <h4>Recommended for Visual Learners</h4>
            <div className="recommendation-cards">
              <div className="recommendation-card">
                <div className="recommendation-img">
                  <img src="https://placehold.co/100x80" alt="Course thumbnail" />
                </div>
                <div className="recommendation-details">
                  <h5>Advanced Data Visualization</h5>
                  <p>Learn to represent complex data through visual elements</p>
                  <button className="start-btn">Start Learning</button>
                </div>
              </div>
              <div className="recommendation-card">
                <div className="recommendation-img">
                  <img src="https://placehold.co/100x80" alt="Course thumbnail" />
                </div>
                <div className="recommendation-details">
                  <h5>Geometry Masterclass</h5>
                  <p>Visual approach to understanding geometric principles</p>
                  <button className="start-btn">Start Learning</button>
                </div>
              </div>
            </div>
          </div>

          <div className="recommendation-section">
            <h4>Suggested Quizzes</h4>
            <div className="recommendation-cards">
              <div className="recommendation-card">
                <div className="recommendation-img quiz">
                  <span>Q</span>
                </div>
                <div className="recommendation-details">
                  <h5>Algebra Concepts Quiz</h5>
                  <p>Test your understanding of algebraic principles</p>
                  <button className="start-btn">Take Quiz</button>
                </div>
              </div>
              <div className="recommendation-card">
                <div className="recommendation-img quiz">
                  <span>Q</span>
                </div>
                <div className="recommendation-details">
                  <h5>Scientific Method Assessment</h5>
                  <p>Evaluate your knowledge of scientific processes</p>
                  <button className="start-btn">Take Quiz</button>
                </div>
              </div>
            </div>
          </div>

          <div className="ai-tutor-section">
            <h4>AI Tutor Suggestions</h4>
            <div className="ai-message">
              <div className="ai-avatar">
                <img src="https://placehold.co/50x50" alt="AI Tutor" />
              </div>
              <div className="ai-content">
                <p>
                  Based on your recent quiz results, I notice you might benefit from additional practice with chemical
                  equations. Would you like me to create some visual exercises to help?
                </p>
                <div className="ai-actions">
                  <button className="ai-action-btn">Yes, please</button>
                  <button className="ai-action-btn secondary">Not now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Dashboard
