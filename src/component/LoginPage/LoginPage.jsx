import React, { useState } from 'react';
import axios from 'axios';
import './LoginPage.css'; // Assuming the CSS file

const LoginPage = () => {
  const [work, setWork] = useState("Sign In");
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Send data to the API
      const response = await axios.post(
        'https://history-page-backend-x2dq.vercel.app/api/user/createImg',
        {
          name: name,
          email: email,
          password: password,
        }
      );

      // Handle API response
      if (response.status === 200) {
        setSuccess('Data stored successfully!');
        setError('');
      } else {
        setError('Failed to store data. Please try again.');
        setSuccess('');
      }
    } catch (err) {
      console.error('Error storing data:', err);
      setError('An error occurred while storing data. Please try again.');
      setSuccess('');
    }
  };



 return (
    <div className="login-page">

      <div className="form-container">
        <h1>{work}</h1>
        <form onSubmit={handleLogin}>
          {work === "Sign In" && (
            <div className="form-group">
              <label>Name <span>*</span></label>
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
            <label>Email Address <span>*</span></label>
            <input
              type="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password <span>*</span></label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="submit-button">
            {work}
          </button>
        </form>

        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
  
      <div className="button-toggle-container">
        <button
          className={`toggle-button ${work === "Sign In" ? "active" : ""}`}
          onClick={() => setWork("Sign In")}
        >
          Sign In
        </button>
        <button
          className={`toggle-button ${work === "Log In" ? "active" : ""}`}
          onClick={() => setWork("Log In")}
        >
          Log In
        </button>
      </div>
   </div>
    </div>
  );
};

export default LoginPage;


// <div className="form-group">
{/* <label>Passkey*</label>
<input
  type="text"
  placeholder="Enter passkey"
  value={passkey}
  onChange={(e) => setPasskey(e.target.value)}
  required
/>
</div>
  {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>} */}