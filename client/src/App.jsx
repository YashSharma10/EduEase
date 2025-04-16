import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import LandingPage from "./pages/LandingPage";
import QuizPage from "./pages/QuizPage";
import Dashboard from "./pages/dashboard";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
  );
};

export default App;
