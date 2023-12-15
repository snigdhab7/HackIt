import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import profileImage from '../images/profile.jpeg';
import coverImage from '../images/background.jpeg';
import './PublicProfile.css'
import * as client from "./client.js";
import { signout } from '../Dashboard/client.js';
import { useParams } from "react-router-dom";
import { FaUser } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
// import { fetchAllEvents } from '../EventDetails/client.js';

const PublicProfile = () => {
    const navigate = useNavigate();
    const bgImage = {
        backgroundImage: `url(${coverImage})`,
    };
    const profileId = useParams().profileId;
    const userId = useParams().id;
    const [account, setAccount] = useState(null);
    const [signedInUser, setSignedInUser] = useState(null);

   
console.log("public profile id",profileId)
console.log("user id of logged in user", userId)
    const fetchCurrentUserDetails = async (id) => {
        try {
            const account = await client.fetchCurrentUserDetails(id);
            setSignedInUser(account);
            
        } catch (error) {
            console.error("Error fetching signed in user details:", error);
        }

    };
    const findUserById = async (profileId) => {
        try {
            const account = await client.fetchCurrentUserDetails(profileId);
            setAccount(account);
            console.log("role is", account.role)
        } catch (error) {
            console.error("Error fetching user details:", error);
        }

    };

    useEffect(() => {
        findUserById(profileId)
        if(userId){
        fetchCurrentUserDetails(userId);
        }
    
    }, [profileId]);

   




    return (

        <div className='profile'>
            {/* <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet"></link> */}
            {account && (
                <div className="profile-content">
                    {/* <!-- Top navbar --> */}
                    <nav className="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
                        <div className="container-fluid">
                            {/* <!-- Brand --> */}
       
                            {/* <!-- Form --> */}
                            <div className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">

                            </div>
                            {/* <!-- User --> */}
                    

                        </div>
                    </nav>
                    {/* <!-- Header --> */}
                    <div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center cover-image" style={bgImage}>
                        {/* <!-- Mask --> */}
                        <span className="mask bg-gradient-default opacity-8"></span>
                        {/* <!-- Header container --> */}
                        <div className="container-fluid d-flex align-items-center">
                            <div className="row">
                                <div className="col-lg-10 col-md-10">
                                    <h1 className="p-display-2 p-text-white"> {account.username}</h1>
                                    {account.role && (
  <p className="p-text-white mt-0 mb-5" style={{fontSize:'1.5em'}}><FaUser  />
    {account.role.charAt(0).toUpperCase() + account.role.slice(1)}
  </p>
)}
                                
                      
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Page content --> */}
                    <div className="container-fluid mt--7">
                        <div className="row">
                        
                            <div className="col-xl-12 order-xl-1">
                                <div className="p-card shadow">
                                    <div className="p-card-header border-0">
                                        <div className="row align-items-center">
                                            <div className="col-8">
                                                {account.role && (
   <h3 className="mb-0">
    {account.role.charAt(0).toUpperCase() + account.role.slice(1)}
    {' '}account</h3>
)} 
                                            </div>
                                            {/* <div className="col-4 text-right">
                                                <a href="#!" className="p-btn p-btn-sm p-btn-info">Change Password</a>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="p-card-body">
                                        <form className="userInfo">
                                            <h6 className="heading-small mb-4"> {account.role.charAt(0).toUpperCase() + account.role.slice(1)}
    {' '} information</h6>
                                            <div className="pl-lg-4">
                              
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="form-group focused">
                                                            <label className="form-control-label" for="input-first-name">First name</label>
                                                            <input
                                                                type="text"
                                                                id="input-first-name"
                                                                className="p-form-control form-control-alternative"
                                                                placeholder="First name" value={account.firstName || ''}
                                                                disabled='true'
                                                                
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group focused">
                                                            <label className="form-control-label" for="input-last-name">Last name</label>
                                                            <input
                                                                type="text"
                                                                id="input-last-name"
                                                                className="p-form-control form-control-alternative"
                                                                placeholder="Last name" value={account.lastName || ''}
                                                                disabled='true'
                                                                
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                {userId && (
  <div className="col-lg-6">
    <div className="form-group focused">
      <label className="form-control-label" htmlFor="input-dob">Date of Birth</label>
      <input
        type="date"
        id="input-dob"
        className="p-form-control form-control-alternative"
        placeholder="Date of Birth"
        value={account.dob ? new Date(account.dob).toISOString().split('T')[0] : ''}
        disabled={true}
      />
    </div>
  </div>
)}

                                                    <div className="col-lg-6">
                                                        <div className="form-group focused">
                                                            <label className="form-control-label" for="input-email">Email address</label>
                                                            <input
                                                                type="email"
                                                                id="input-email"
                                                                className="p-form-control form-control-alternative"
                                                                placeholder="email" value={account.email || ''}
                                                                disabled='true'
                            
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="my-4" />
                                            {/* <!-- Address --> */}
                                            <h6 className="heading-small mb-4">Contact information</h6>
                                            <div className="pl-lg-4">
                                            {userId ? (
  <div className="row">
    <div className="col-lg-6">
      <div className="form-group focused">
        <label className="form-control-label" htmlFor="input-phoneNumber">Phone Number</label>
        <input
          type="string"
          id="input-phoneNumber"
          className="p-form-control form-control-alternative"
          placeholder="Phone Number"
          value={account.phoneNumber || ''}
          disabled={true}
        />
      </div>
    </div>
  </div>
) : (
  <Link to={`/Dashboard/signIn`}>
    <p style={{ fontSize: "1.5em" }}>
      <FaUser style={{ marginRight: '8px' }} /> Sign In to view
    </p>
  </Link>
)}
{/*   <Link to={`/Dashboard/signIn`} >
    <p style={{ fontSize: "1.5em"}}>
      <FaUser style={{ marginRight: '8px' }} /> Sign In to view
    </p>
  </Link> */}
</div>
                                            <hr className="my-4" />
                                            {/* <!-- Description --> */}
                                            <h6 className="heading-small mb-4">About</h6>
                                            <div className="pl-lg-4">
                                                <div className="form-group focused">
                                                    {/* <label>About Me</label> */}
                                                    <textarea
                                                        rows="4"
                                                        className="p-form-control form-control-alternative"
                                                        placeholder="A few words about you ..." value={account.aboutMe || ''}
                                                        disabled='true'
                                                    >
                                                        {/* {aboutMe} */}
                                                    </textarea>
                                                </div>
                                            
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>

    );

}
export default PublicProfile;