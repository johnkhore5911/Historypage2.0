// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import jwtDecode from 'jwt-decode'; // Install using npm install jwt-decode

// const VerificationPage = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('jwtToken');
//     if (!token) {
//       navigate('/login'); // Redirect to login if no token is found
//       return;
//     }

//     try {
//       const decodedToken = jwtDecode(token);

//       // Check if token is expired (optional, depends on your API setup)
//       if (decodedToken.exp * 1000 < Date.now()) {
//         localStorage.removeItem('jwtToken'); // Clear expired token
//         navigate('/login'); // Redirect to login
//       }
//     } catch (err) {
//       console.error('Invalid token:', err);
//       navigate('/login'); // Redirect to login
//     }
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem('jwtToken'); // Remove token
//     navigate('/login'); // Redirect to login
//   };

//   return (
//     <div className="verification-page">
//       <h1>Welcome to the Verification Page</h1>
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// };

// export default VerificationPage;
