import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import BrowseJobs from './components/BrowseJobs';
import AppliedJobs from './components/AppliedJobs';
import ManageJobs from './components/ManageJobs';
import UserApplications from './components/UserApplications';
import './App.css';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/user-dashboard" element={<UserDashboard />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/browse-jobs" element={<BrowseJobs />} />
                <Route path="/applied-jobs" element={<AppliedJobs />} />
                <Route path="/manage-jobs" element={<ManageJobs />} />
                <Route path="/user-applications" element={<UserApplications />} />
            </Routes>
        </Router>
    );
};

export default App;
