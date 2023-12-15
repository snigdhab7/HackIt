// Navbar.js
import React, { useState, useEffect } from "react";
import { FiUser } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import logoImage from '../images/Screenshot 2023-12-14 at 6.55.24 PM.png';
const Navbar = ({ userid }) => {
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const signout = async () => {
    await client.signout();
    navigate("/");
  };
  const fetchCurrentUserDetails = async (userid) => {
    try {
        const account = await client.fetchCurrentUserDetails(userid);
        
        setAccount(account);
    } catch (error) {
        console.error("Error fetching user details:", error);
    }

};
  useEffect(() => {
    const findUserById = async (userid) => {
      try {
        const user = await client.findUserById(userid);
        setAccount(user);
        console.log("Fetched user:", user);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchCurrentUserDetails(userid);
   // findUserById(userid);
  }, [userid]);
  
  const { username, role } = account || {};
  //console.log("acc", role);
  return (
    <div className="navbar-content">
      {/* Left side of the navbar */}
      <div className="navbar-left">
        
      <img
  style={{ width: '3%' , marginLeft:'20px'}}
  src={logoImage}

/>
       
       
         {userid ? (<>
           <Link to={`/${userid}`} className="navbar-left-button" style={{ textDecoration: 'none' }}>
           Home</Link>
          <Link to={`/${userid}/about`} className="navbar-left-button" style={{ textDecoration: 'none' }}>
           About
          </Link>
          {account && account.role === 'organizer' && (
          <Link to={`/${userid}/myEvents`} className="navbar-left-button" style={{ textDecoration: 'none' }}>
            My Events
          </Link>
        )}</>
        ) : (<>
        <Link to={`/`} className="navbar-left-button" style={{ textDecoration: 'none' }}>
        Home</Link>
          <Link to="/about" className="navbar-left-button" style={{ textDecoration: 'none' }}>
            About
          </Link></>
        )}
      </div>
      {/* Right side of the navbar */}
      <div className="navbar-right">
        {userid ? (
          <>
            <div className="navbar-right-button" onClick={signout}>
              <Link className="link-style" style={{ textDecoration: 'none' }}>Sign Out</Link>
            </div>
           
            {/* If user logged in only show the profile and signout button */}
            <Link to={`/profile/${userid}`} style={{ textDecoration: 'none' }}>
              <span className="profile-icon">
                <FiUser />    {account && <span style={{fontSize:'18px'}}>{account.username}</span>}
              </span>
            </Link>
         
          </>
        ) : (
          <>
            {/* If user not logged in  show the sign in and sign out button */}

            <Link className="navbar-right-button" to={`/Dashboard/signIn`}  style={{ textDecoration: 'none' }}>
              Sign In
            </Link>
            <Link className="navbar-right-button" to={`/Dashboard/signUp`}  style={{ textDecoration: 'none' }}>
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
