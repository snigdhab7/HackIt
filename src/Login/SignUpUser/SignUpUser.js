import React, { useState } from "react";
import "../SignUpUser.css"; // Make sure to adjust the path according to your project structure
import { Link, useNavigate } from "react-router-dom";
import * as client from "../client";

const SignUpUser = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const signup = async () => {
    // Basic validation
    if (!credentials.username || !credentials.password) {
      setError("Username and password are required.");
      return;
    }

    try {
      const response=await client.signup(credentials);
      console.log("respp",response)
     // if(response.username){
      navigate("/");
     // }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        // Username already exists
        setError("Username already taken.");
      } else {
        // Handle other sign-up failures
        setError("Sign-up failed. Please try again.");
      }
    }
  };

  return (
    <div className="signup-container">
      <h1 class="signup-heading">Sign Up</h1>
      <div className="input-container">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={credentials.username}
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
        />
      </div>
      <div className="input-container">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
      </div>

      {error && <p className="error-message">{error}</p>}

   
        <button className="signup-button" onClick={signup}>
          Sign Up
        </button>
      
    </div>
  );
};

export default SignUpUser;
