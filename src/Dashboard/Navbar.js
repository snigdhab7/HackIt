// Navbar.js
import React, { useState, useEffect } from "react";
import { FiUser } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";

const Navbar = ({ userid }) => {
  console.log("NAVBAR1111", userid);
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const signout = async () => {
    await client.signout();
    console.log("Sign out button clicked");
    navigate("/");
  };
  const handleClick = () => {
    // Call your function here
    console.log("Sign In button clicked");
  };
  useEffect(() => {
    const findUserById = async (userid) => {
      try {
        // const eventsData = await client.findAllEvents();
        const user = await client.findUserById(userid);
        setAccount(user);
        console.log("Fetched user:", user);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    findUserById(userid);
  }, [userid]);
  console.log("acc", account);
  const { username } = account || {};
  return (
    <div className="navbar-content">
      {/* Left side of the navbar */}
      <div className="navbar-left">
        <Link className="navbar-left-button">Home</Link>
        <Link className="navbar-left-button">About</Link>
      </div>
      {/* Right side of the navbar */}
      <div className="navbar-right">
        {userid ? (
          <>
            <div className="navbar-right-button" onClick={signout}>
              <Link className="link-style">Sign Out</Link>
            </div>
            {username && <span>{username}</span>}
            {/* If user logged in only show the profile and signout button */}
            <Link to={`/profile/${userid}`}>
              <span className="profile-icon">
                <FiUser />
              </span>
            </Link>
          </>
        ) : (
          <>
            {/* If user not logged in  show the sign in and sign out button */}

            <Link className="navbar-right-button" to={`/Dashboard/signIn`}>
              Sign In
            </Link>
            <Link className="navbar-right-button" to={`/Dashboard/signUp`}>
              Sign Up
            </Link>
          </>
        )}

        {/*      <Link className="navbar-right-button" to={`/Dashboard/signIn`}>Sign In</Link>
        <Link className="navbar-right-button" to={`/Dashboard/signUp`}>Sign Up</Link>
        <Link to={`/profile`}><span className="profile-icon"><FiUser /></span></Link> */}
      </div>
    </div>
  );
};

export default Navbar;
