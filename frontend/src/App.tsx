import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import StudentDashboard from './pages/StudentDashboard';
import ResumeAnalyzer from './pages/ResumeAnalyzer';
import JobMatch from './pages/JobMatch';
import AIChat from './pages/AIChat';
import MockInterview from './pages/MockInterview';
import CareerRoadmap from './pages/CareerRoadmap';
import Skills from './pages/Skills';
import Profile from './pages/Profile';
import RecruiterDashboard from './pages/RecruiterDashboard'; 
// Import your new AdminDashboard component
import AdminDashboard from './pages/AdminDashboard'; 
import VoiceInterview from "./pages/VoiceInterview";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/resume-analyzer" element={<ResumeAnalyzer />} />
        <Route path="/job-match" element={<JobMatch />} />
        <Route path="/ai-chat" element={<AIChat />} />
        <Route path="/mock-interview" element={<MockInterview />} />
        <Route path="/career-roadmap" element={<CareerRoadmap />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/recruiter-dashboard" element={<RecruiterDashboard />} />
        
        {/* Added Admin Dashboard Route */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/voice-interview" element={<VoiceInterview />} />
      </Routes>
    </Router>
  );
}

export default App;