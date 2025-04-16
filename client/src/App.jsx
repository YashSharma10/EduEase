import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import LandingPage from "./pages/LandingPage";
import QuizPage from "./pages/QuizPage";
import Dashboard from "./pages/dashboard";
import EduBot from "./pages/bot";
import JavaCoursesPage from "./pages/JavaCoursesPage";
import Footer from "./components/ui/common/Footer";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bot" element={<EduBot />} />
        <Route path="/course" element={<JavaCoursesPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
