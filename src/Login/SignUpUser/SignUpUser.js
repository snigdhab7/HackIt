// SignUp.js

import React, { useState } from 'react';
import './SignUpUser.css'; // Make sure to adjust the path according to your project structure

const SignUpUser = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Handle the sign-up logic here (e.g., send data to server)
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="signup-container">
      <h1 class="signup-heading">Sign Up</h1>
      <div className="input-container">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="signup-button" onClick={handleSignUp}>
        Sign Up
      </button>
    </div>
  );
};

export default SignUpUser;
