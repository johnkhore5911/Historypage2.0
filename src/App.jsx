import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './component/home/HomePage';
import LoginPage from './component/LoginPage/LoginPage'; // Create this LoginPa
import DataUpload from './component/dataUpload/dataUpload';
// import VerificationPage from './component/VerificationPage/VerificationPage';

function App() {
  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/" element={<HomePage/>} /> 
          
          <Route path="/data-Upload" element={<DataUpload/>} />
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/Verification" element={<VerificationPage />} />  */}
       
        </Routes>
  
  
      </div>
    </Router>
  );
}

export default App;
