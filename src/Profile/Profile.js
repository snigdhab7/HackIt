import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import profileImage from '../images/profile.jpeg';
import coverImage from '../images/background.jpeg';
import '../Profile/Profile.css';
import * as client from "./client.js";
import { signout } from '../Dashboard/client.js';
import { useParams } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();
    const bgImage = {
        backgroundImage: `url(${coverImage})`,
    };
    const firstName = "Jaehyun";
    const lastName = "Jung";
    const email = "Jaehyun@gmail.com";
    const userid = useParams().id;
    const [account, setAccount] = useState(null);
    const [address, setAddress] = useState(null);
    // State to manage whether the user is in "edit" mode
    const [isEditMode, setIsEditMode] = useState(false);

    const fetchCurrentUserDetails = async (userid) => {
        // console.log("proile id", userid)
        try {
            const account = await client.fetchCurrentUserDetails(userid);
            setAccount(account);
            // console.log("client response", account);
        } catch (error) {
            console.error("Error fetching user details:", error);
        }

    };

    const save = async () => {
        setIsEditMode(false);
        // console.log("after change :", account);
        const updatedDetails = await client.updateUser(account);
        setAccount(updatedDetails);
    };

    const cancel = async () => {
        setIsEditMode(false);
        fetchCurrentUserDetails(userid);
    };

    useEffect(() => {
        // console.log()
        fetchCurrentUserDetails(userid);
    }, [userid]);

    const signOff = async () => {
        await signout();
        console.log("Sign out button clicked");
        navigate("/");
    };

    return (

        <div className='profile'>
            {/* <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet"></link> */}
            {account && (
                <div className="profile-content">
                    {/* <!-- Top navbar --> */}
                    <nav className="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
                        <div className="container-fluid">
                            {/* <!-- Brand --> */}
                            <Link to={`/${userid}`} className="p-h4 mb-0 mr-2 p-text-white text-uppercase d-none d-lg-inline-block" >Home</Link>
                            <Link to={`/profile/${userid}`} className="p-h4 ml-2 mb-0 p-text-white text-uppercase d-none d-lg-inline-block" >User profile</Link>
                            <Link to={`/users/${userid}`} className="p-h4 ml-2 mb-0 p-text-white text-uppercase d-none d-lg-inline-block" >
                                Users
                            </Link>

                            {/* <!-- Form --> */}
                            <form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
                                {/* <div className="form-group mb-0">
                                    <div className="input-group input-group-alternative">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-search"></i></span>
                                        </div>
                                        <input className="form-control mt-0" placeholder="Search People" type="text" />
                                    </div>
                                </div> */}
                            </form>
                            {/* <!-- User --> */}
                            <div className="nav-link pr-0" role="button" aria-haspopup="true" aria-expanded="false">
                                <div className="media align-items-center">
                                    <span className="avatar avatar-sm rounded-circle">
                                        <img alt="Image placeholder" src={profileImage} />
                                    </span>
                                    <div className="media-body ml-2 d-none d-lg-block">
                                        <span className="mb-0 text-sm  font-weight-bold">{account.firstName || ''}{" "}{account.lastName || ''}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="nav-link pr-0" role="button" aria-haspopup="true" aria-expanded="false" onClick={signOff}>
                                <div className="media align-items-center">                            
                                    <div className="media-body ml-2 d-none d-lg-block">
                                        <span className="mb-0 text-sm  font-weight-bold">Sign out</span>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </nav>
                    {/* <!-- Header --> */}
                    <div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center cover-image" style={bgImage}>
                        {/* <!-- Mask --> */}
                        <span className="mask bg-gradient-default opacity-8"></span>
                        {/* <!-- Header container --> */}
                        <div className="container-fluid d-flex align-items-center">
                            <div className="row">
                                <div className="col-lg-7 col-md-10">
                                    <h1 className="p-display-2 p-text-white">Hello {account.username}</h1>
                                    <p className="p-text-white mt-0 mb-5">This is your profile page. You can see the events you've registered for and manage your schedule.</p>
                                    {/* <button href="#!" className="p-btn p-btn-info">Edit profile<button/> */}
                                    {!isEditMode && (
                                        <button className="p-btn p-btn-info" onClick={() => setIsEditMode(true)}>Edit profile</button>)}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Page content --> */}
                    <div className="container-fluid mt--7">
                        <div className="row">
                            <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
                                <div className="p-card card-profile shadow">
                                    {/* <div className="row justify-content-center">
                                    <div className="col-lg-3 order-lg-2">
                                        <div className="card-profile-image">
                                            <a href="#">
                                                <img src={profileImage} className="rounded-circle" />
                                            </a>
                                        </div>
                                    </div>
                                </div> */}
                                    <div className="p-card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                                        <div className="d-flex justify">
                                            <a href="#" className="p-btn p-btn-sm p-btn-info mr-4">Upcoming Events</a>
                                            <a href="#" className="p-btn p-btn-sm p-btn-default">All Events</a>
                                        </div>
                                    </div>
                                    <div className="p-card-body pt-0 pt-md-4">
                                        <div className="row">
                                            <div className="col">
                                                Event 1
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                Event 2
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                Event 3
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8 order-xl-1">
                                <div className="p-card shadow">
                                    <div className="p-card-header border-0">
                                        <div className="row align-items-center">
                                            <div className="col-8">
                                                <h3 className="mb-0">My account</h3>
                                            </div>
                                            {/* <div className="col-4 text-right">
                                                <a href="#!" className="p-btn p-btn-sm p-btn-info">Change Password</a>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="p-card-body">
                                        <form className="userInfo">
                                            <h6 className="heading-small mb-4">User information</h6>
                                            <div className="pl-lg-4">
                                                {isEditMode && (
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className="form-group focused">
                                                                <label className="form-control-label" for="input-username">Username</label>
                                                                <input
                                                                    type="text"
                                                                    id="input-username"
                                                                    className="p-form-control form-control-alternative"
                                                                    placeholder="Username"
                                                                    value={account.username || ''}
                                                                    disabled={!isEditMode}
                                                                    onChange={(e) => setAccount({ ...account, username: e.target.value })}

                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-group focused">
                                                                <label className="form-control-label" for="input-password">Password </label>
                                                                <input
                                                                    type="password"
                                                                    id="input-password"
                                                                    className="p-form-control form-control-alternative"
                                                                    placeholder="password" value={account.password || ''}
                                                                    disabled={!isEditMode}
                                                                    onChange={(e) => setAccount({ ...account, password: e.target.value })}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>)}
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="form-group focused">
                                                            <label className="form-control-label" for="input-first-name">First name</label>
                                                            <input
                                                                type="text"
                                                                id="input-first-name"
                                                                className="p-form-control form-control-alternative"
                                                                placeholder="First name" value={account.firstName || ''}
                                                                disabled={!isEditMode}
                                                                onChange={(e) => setAccount({ ...account, firstName: e.target.value })}
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
                                                                disabled={!isEditMode}
                                                                onChange={(e) => setAccount({ ...account, lastName: e.target.value })}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="form-group focused">
                                                            <label className="form-control-label" for="input-dob">Date of Birth</label>
                                                            <input
                                                                type="date"
                                                                id="input-dob"
                                                                className="p-form-control form-control-alternative"
                                                                placeholder="Date of Birth"
                                                                value={account.dob ? new Date(account.dob).toISOString().split('T')[0] : ''}
                                                                disabled={!isEditMode}
                                                                onChange={(e) => setAccount({ ...account, dob: e.target.value })}
                                                            />

                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group focused">
                                                            <label className="form-control-label" for="input-email">Email address</label>
                                                            <input
                                                                type="email"
                                                                id="input-email"
                                                                className="p-form-control form-control-alternative"
                                                                placeholder="email" value={account.email || ''}
                                                                disabled={!isEditMode}
                                                                onChange={(e) => setAccount({ ...account, email: e.target.value })}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="my-4" />
                                            {/* <!-- Address --> */}
                                            <h6 className="heading-small mb-4">Contact information</h6>
                                            <div className="pl-lg-4">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group focused">
                                                            <label className="form-control-label" for="input-address">Address</label>
                                                            <input
                                                                id="input-address"
                                                                className="p-form-control form-control-alternative"
                                                                placeholder="Home Address"
                                                                type="text"
                                                                value={account.address?.address || ''}
                                                                disabled={!isEditMode}
                                                                onChange={(e) => setAccount({ ...account, address: { ...account.address, address: e.target.value } })}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-4">
                                                        <div className="form-group focused">
                                                            <label className="form-control-label" for="input-city">City</label>
                                                            <input
                                                                type="text"
                                                                id="input-city"
                                                                className="p-form-control form-control-alternative"
                                                                placeholder="City" value={account.address?.city || ''}
                                                                disabled={!isEditMode}
                                                                onChange={(e) => setAccount({ ...account, address: { ...account.address, city: e.target.value } })}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="form-group focused">
                                                            <label className="form-control-label" for="input-country">Country</label>
                                                            <input
                                                                type="text"
                                                                id="input-country"
                                                                className="p-form-control form-control-alternative"
                                                                placeholder="Country" value={account.address?.country || ''}
                                                                disabled={!isEditMode}
                                                                onChange={(e) => setAccount({ ...account, address: { ...account.address, country: e.target.value } })}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="form-group">
                                                            <label className="form-control-label" for="input-postal-code">Postal code</label>
                                                            <input
                                                                type="number"
                                                                id="input-postal-code"
                                                                className="p-form-control form-control-alternative"
                                                                placeholder="Postal code" value={account.address?.postalCode || ''}
                                                                disabled={!isEditMode}
                                                                onChange={(e) => setAccount({ ...account, address: { ...account.address, postalCode: e.target.value } })}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="form-group focused">
                                                            <label className="form-control-label" for="input-phoneNumber">Phone Number</label>
                                                            <input
                                                                type="string"
                                                                id="input-phoneNumber"
                                                                className="p-form-control form-control-alternative"
                                                                placeholder="Phone Number" value={account.phoneNumber || ''}
                                                                disabled={!isEditMode}
                                                                onChange={(e) => setAccount({ ...account, phoneNumber: e.target.value })}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="my-4" />
                                            {/* <!-- Description --> */}
                                            <h6 className="heading-small mb-4">About me</h6>
                                            <div className="pl-lg-4">
                                                <div className="form-group focused">
                                                    {/* <label>About Me</label> */}
                                                    <textarea
                                                        rows="4"
                                                        className="p-form-control form-control-alternative"
                                                        placeholder="A few words about you ..." value={account.aboutMe || ''}
                                                        disabled={!isEditMode}
                                                        onChange={(e) => setAccount({ ...account, aboutMe: e.target.value })}
                                                    >
                                                        {/* {aboutMe} */}
                                                    </textarea>
                                                </div>
                                                {isEditMode && (
                                                    <div class="col-12 text-right">
                                                        <button className="p-btn p-btn-info mr-3" onClick={save}>Save</button>
                                                        <button className="p-btn p-btn-info mr-3" onClick={cancel}>Cancel</button>
                                                    </div>)}
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
export default Profile;