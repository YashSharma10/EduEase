import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FuturisticAILanding from "./pages/LandingPage";
import Profile from "./pages/Profile";
import LandingPage from "./pages/LandingPage";
import QuizPage from "./pages/QuizPage";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        {/* <Route path="/" element={<FuturisticAILanding />} /> */}
        <Route path="/profile" element={<Profile />} />
      </Routes>
  );
};

export default App;
