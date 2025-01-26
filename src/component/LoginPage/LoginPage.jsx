import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [work, setWork] = useState('Sign In');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validation
    if (!email || !password || (work === 'Sign In' && !name)) {
      setError('Please fill in all required fields.');
      return;
    }

    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      const url =
        work === 'Sign In'
          ? 'https://historypage-cyan.vercel.app/api/user/signup'
          : 'https://historypage-cyan.vercel.app/api/user/signin';

      const payload = {
        email,
        password,
        ...(work === 'Sign In' && { name }), // Include name for sign-up
      };

      const response = await axios.post(url, payload);

      if (response.status === 200) {
        const { token, verified } = response.data;

        // Store the JWT token
        localStorage.setItem('jwtToken', token);

        setSuccess('Authentication successful!');
        setError('');
        setEmail('');
        setName('');
        setPassword('');

        // Redirect user based on verification status
        if (verified) {
          navigate('/data-upload');
        } else {
          navigate('/verification');
        }
      } else {
        setError(response.data?.message || 'Authentication failed. Please try again.');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred. Please try again.');
    } finally {
       navigate('/data-upload');
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="form-container">
        <h1>{work}</h1>
        <form onSubmit={handleLogin}>
          {work === 'Sign In' && (
            <div className="form-group">
              <label>
                Name <span>*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}

          <div className="form-group">
            <label>
              Email Address <span>*</span>
            </label>
            <input
              type="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>
              Password <span>*</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="submit-button" disabled={isLoading}>
            {isLoading ? 'Loading...' : work}
          </button>
        </form>

        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}

        <div className="button-toggle-container">
          <button
            className={`toggle-button ${work === 'Sign In' ? 'active' : ''}`}
            onClick={() => setWork('Sign In')}
          >
            Sign In
          </button>
          <button
            className={`toggle-button ${work === 'Log In' ? 'active' : ''}`}
            onClick={() => setWork('Log In')}
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;



// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // Import for navigation
// import './LoginPage.css';

// const LoginPage = () => {
//   const [work, setWork] = useState("Sign In");
//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate(); // Hook for navigation

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!email || !password || (work === "Sign In" && !name)) {
//       setError("Please fill in all required fields.");
//       return;
//     }

//     setIsLoading(true);

//     try {
//       const response = await axios.post(
//         work === "Sign In"
//           ? 'https://historypage-cyan.vercel.app/api/user/signup'
//           : 'https://historypage-cyan.vercel.app/api/user/signin',
//         {
//           name: work === "Sign In" ? name : undefined,
//           email,
//           password,
//         }
//       );

//       if (response.status === 200) {
//         const { token } = response.data; // Assume API returns a JWT token
//         localStorage.setItem('jwtToken', token); // Store token in local storage
//         setSuccess('Authentication successful!');
//         setError('');
//         setEmail('');
//         setName('');
//         setPassword('');

//         // Navigate to the verification page
//         navigate('/verification');
//       } else {
//         setError(response.data?.message || 'Authentication failed. Please try again.');
//         setSuccess('');
//       }
//     } catch (err) {
//       console.error('Error during authentication:', err.response || err);
//       setError(err.response?.data?.message || 'An error occurred. Please try again.');
//       setSuccess('');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="login-page">
//       <div className="form-container">
//         <div className="topMost"><h1>{work}</h1></div>
//         <form onSubmit={handleLogin}>
//           {work === "Sign In" && (
//             <div className="form-group">
//               <label>Name <span>*</span></label>
//               <input
//                 type="text"
//                 placeholder="Enter Your Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//             </div>
//           )}

//           <div className="form-group">
//             <label>Email Address <span>*</span></label>
//             <input
//               type="email"
//               placeholder="Enter Email Address"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Password <span>*</span></label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <button type="submit" className="submit-button" disabled={isLoading}>
//             {isLoading ? "Loading..." : work}
//           </button>
//         </form>

//         {error && <p className="error-message">{error}</p>}
//         {success && <p className="success-message">{success}</p>}

//         <div className="button-toggle-container">
//           <button
//             className={`toggle-button ${work === "Sign In" ? "active" : ""}`}
//             onClick={() => setWork("Sign In")}
//           >
//             Sign In
//           </button>
//           <button
//             className={`toggle-button ${work === "Log In" ? "active" : ""}`}
//             onClick={() => setWork("Log In")}
//           >
//             Log In
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;




// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import './LoginPage.css'; // Assuming the CSS file exists

// // const LoginPage = () => {
// //   const [work, setWork] = useState("Sign In");
// //   const [email, setEmail] = useState('');
// //   const [name, setName] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState('');
// //   const [success, setSuccess] = useState('');
// //   const [isLoading, setIsLoading] = useState(false); // Loading state

// //   const handleLogin = async (e) => {
// //     e.preventDefault();

// //     // Input validation
// //     if (!email || !password || (work === "Sign In" && !name)) {
// //       setError("Please fill in all required fields.");
// //       return;
// //     }

// //     setIsLoading(true); // Show loading state

// //     try {
// //       // API request
// //       const response = await axios.post(
// //         'https://historypage-cyan.vercel.app/api/user/createImg',
// //         {
// //           name: work === "Sign In" ? name : undefined, // Include name only for Sign In
// //           email,
// //           password,
// //         }
// //       );

// //       // Handle successful response
// //       if (response.status === 200) {
// //         setSuccess('Data stored successfully!');
// //         setError('');
// //         setEmail('');
// //         setName('');
// //         setPassword('');
// //       } else {
// //         setError(response.data?.message || 'Failed to store data. Please try again.');
// //         setSuccess('');
// //       }
// //     } catch (err) {
// //       // Handle error response
// //       console.error('Error storing data:', err.response || err);
// //       setError(err.response?.data?.message || 'An error occurred while storing data. Please try again.');
// //       setSuccess('');
// //     } finally {
// //       setIsLoading(false); // Remove loading state
// //     }
// //   };

// //   return (
// //     <div className="login-page">
// //       <div className="form-container">
// //        <div className="topMost"><h1>{work}</h1></div> 
// //         <form onSubmit={handleLogin}>
// //           {work === "Sign In" && (
// //             <div className="form-group">
// //               <label>Name <span>*</span></label>
// //               <input
// //                 type="text"
// //                 placeholder="Enter Your Name"
// //                 value={name}
// //                 onChange={(e) => setName(e.target.value)}
// //                 required
// //               />
// //             </div>
// //           )}

// //           <div className="form-group">
// //             <label>Email Address <span>*</span></label>
// //             <input
// //               type="email"
// //               placeholder="Enter Email Address"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               required
// //             />
// //           </div>

// //           <div className="form-group">
// //             <label>Password <span>*</span></label>
// //             <input
// //               type="password"
// //               placeholder="Enter Password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               required
// //             />
// //           </div>

// //           <button type="submit" className="submit-button" disabled={isLoading}>
// //             {isLoading ? "Loading..." : work}
// //           </button>
// //         </form>

// //         {/* Error and Success Messages */}
// //         {error && <p className="error-message">{error}</p>}
// //         {success && <p className="success-message">{success}</p>}

// //         {/* Toggle Buttons */}
// //         <div className="button-toggle-container">
// //           <button
// //             className={`toggle-button ${work === "Sign In" ? "active" : ""}`}
// //             onClick={() => setWork("Sign In")}
// //           >
// //             Sign In
// //           </button>
// //           <button
// //             className={`toggle-button ${work === "Log In" ? "active" : ""}`}
// //             onClick={() => setWork("Log In")}
// //           >
// //             Log In
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LoginPage;



// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import './LoginPage.css'; // Assuming the CSS file

// // const LoginPage = () => {
// //   const [work, setWork] = useState("Sign In");
// //   const [email, setEmail] = useState('');
// //   const [name, setName] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState('');
// //   const [success, setSuccess] = useState('');

// //   const handleLogin = async (e) => {
// //     e.preventDefault();

// //     try {
// //       // Send data to the API
// //       const response = await axios.post(
// //        'https://historypage-cyan.vercel.app/api/user/createImg',
// //         {
// //           name: name,
// //           email: email,
// //           password: password,
// //         }
// //       );

// //       // Handle API response
// //       if (response.status === 200) {
// //         setSuccess('Data stored successfully!');
// //         setError('');
// //       } else {
// //         setError('Failed to store data. Please try again.');
// //         setSuccess('');
// //       }
// //     } catch (err) {
// //       console.error('Error storing data:', err);
// //       setError('An error occurred while storing data. Please try again.');
// //       setSuccess('');
// //     }
// //   };



// //  return (
// //     <div className="login-page">

// //       <div className="form-container">
// //         <h1>{work}</h1>
// //         <form onSubmit={handleLogin}>
// //           {work === "Sign In" && (
// //             <div className="form-group">
// //               <label>Name <span>*</span></label>
// //               <input
// //                 type="text"
// //                 placeholder="Enter Your Name"
// //                 value={name}
// //                 onChange={(e) => setName(e.target.value)}
// //                 required
// //               />
// //             </div>
// //           )}

// //           <div className="form-group">
// //             <label>Email Address <span>*</span></label>
// //             <input
// //               type="email"
// //               placeholder="Enter Email Address"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               required
// //             />
// //           </div>

// //           <div className="form-group">
// //             <label>Password <span>*</span></label>
// //             <input
// //               type="password"
// //               placeholder="Enter Password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               required
// //             />
// //           </div>

// //           <button type="submit" className="submit-button">
// //             {work}
// //           </button>
// //         </form>

// //         {error && <p className="error-message">{error}</p>}
// //         {success && <p className="success-message">{success}</p>}
  
// //       <div className="button-toggle-container">
// //         <button
// //           className={`toggle-button ${work === "Sign In" ? "active" : ""}`}
// //           onClick={() => setWork("Sign In")}
// //         >
// //           Sign In
// //         </button>
// //         <button
// //           className={`toggle-button ${work === "Log In" ? "active" : ""}`}
// //           onClick={() => setWork("Log In")}
// //         >
// //           Log In
// //         </button>
// //       </div>
// //    </div>
// //     </div>
// //   );
// // };

// // export default LoginPage;


// // // <div className="form-group">
// // {/* <label>Passkey*</label>
// // <input
// //   type="text"
// //   placeholder="Enter passkey"
// //   value={passkey}
// //   onChange={(e) => setPasskey(e.target.value)}
// //   required
// // />
// // </div>
// //   {error && <p className="error-message">{error}</p>}
// //           {success && <p className="success-message">{success}</p>} */}