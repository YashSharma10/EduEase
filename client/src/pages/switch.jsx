"use client"

import { useState } from "react"
import Profile from "./Profile"
import Dashboard from "./dashboard"
import "./switch.css"

const Switch = () => {
  const [activeView, setActiveView] = useState("profile")

  return (
    <div className="profile-container">
      <div className="view-switcher">
        <button
          className={activeView === "profile" ? "active" : ""}
          onClick={() => setActiveView("profile")}
        >
          Profile
        </button>
        <button
          className={activeView === "dashboard" ? "active" : ""}
          onClick={() => setActiveView("dashboard")}
        >
          Dashboard
        </button>
      </div>

      {activeView === "profile" && <Profile />}
      {activeView === "dashboard" && <Dashboard />}
    </div>
  )
}

export default Switch
