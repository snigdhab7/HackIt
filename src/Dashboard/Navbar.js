// Navbar.js

import React from "react";
import { FiUser } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="navbar-content">
      {/* Left side of the navbar */}
      <div className="navbar-left">
        <button className="navbar-left-button">Home</button>
        <button className="navbar-left-button">About</button>
      </div>
      {/* Right side of the navbar */}
      <div className="navbar-right">
        {/* Profile icon placeholder (replace with your preferred icon) */}
        <button className="navbar-right-button">Login</button>
        <button className="navbar-right-button">Sign Up</button>
        <span className="profile-icon"><FiUser /></span>
      </div>
    </div>
  );
};

export default Navbar;
