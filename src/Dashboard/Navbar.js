// Navbar.js

import React from "react";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-content">
      {/* Left side of the navbar */}
      <div className="navbar-left">
        <Link className="navbar-left-button">Home</Link>
        <Link className="navbar-left-button">About</Link>
      </div>
      {/* Right side of the navbar */}
      <div className="navbar-right">
        {/* Profile icon placeholder (replace with your preferred icon) */}
        <Link className="navbar-right-button" to={`/Dashboard/signIn`}>Sign In</Link>
        <Link className="navbar-right-button" to={`/Dashboard/signUp`}>Sign Up</Link>
        <Link to={`/profile`}><span className="profile-icon"><FiUser /></span></Link>
      </div>
    </div>
  );
};

export default Navbar;
