import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './component/home/HomePage'
import LoginPage from './component/LoginPage/LoginPage'
import DataUpload from './component/DataUpload/DataUpload';
import SignupPage from './component/LoginPage/SignUp';

function App() {
  const isAuthenticated = !!localStorage.getItem('jwtToken');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/data-upload" element={<DataUpload />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/SignUp" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;