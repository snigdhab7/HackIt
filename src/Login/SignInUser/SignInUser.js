// SignUp.js

import React, { useState , useEffect }  from "react";
import * as client from "../client"
import "../SignUpUser.css"; // Make sure to adjust the path according to your project structure
import { useLocation, useHistory } from 'react-router-dom';
import { Link,useNavigate } from "react-router-dom";
function SignInUser() {
  
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    //navigate("/");
  };

  const signup = async () => {
    try {
      await client.signup(credentials);
      //navigate("/Kanbas/account");
    } catch (err) {
        console.log("error",err)
     // setError(err.response.data.message);
    }
  };

  const signin1 = async () => {
    try {
      console.log("Calling findAllUsers API");
      const users = await client.findAllUsers();
      // Do something with the fetched users, e.g., update state or display in the UI
      console.log("Fetched users:", users);
      //navigate("/Kanbas/account");
    } catch (err) {
      console.error("Error during API call:", err);
      // setError(err.response.data.message);
    }
  };
  

  return (
      <div className="signup-container">
        {/* <h1 className="signup-heading">{isOrganizer ? 'Sign Up as Organizer' : 'Sign Up'}</h1> */}
        <h1 class="signup-heading">Sign In</h1>
        <div className="input-container">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})}
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}
          />
        </div>
      
        <button className="signup-button" onClick={signup}>
          Sign Up
        </button>
      </div>
  );
}

export default SignInUser;
