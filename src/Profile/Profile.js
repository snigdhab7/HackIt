import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../images/profile.jpeg';
import coverImage from '../images/background.jpeg';
import '../Profile/Profile.css';
import { useParams } from "react-router-dom";
const Profile = () => {
    const bgImage = {
        backgroundImage: `url(${coverImage})`,
    };
    const firstName = "Jaehyun";
    const lastName = "Jung";
    const email = "Jaehyun@gmail.com";
    const userid = useParams().id;
    console.log("profileid",userid)
    
    // const aboutMe;
    // const phoneNumber;
    

    return (

        <div className='profile'>
            {/* <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet"></link> */}
            <div className="profile-content">
                {/* <!-- Top navbar --> */}
                <nav className="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
                    <div className="container-fluid">
                        {/* <!-- Brand --> */}
                        <Link to = {`/${userid}`} className="p-h4 mb-0 mr-2 p-text-white text-uppercase d-none d-lg-inline-block" >Home</Link>
                        <Link to = {`/profile/${userid}`} className="p-h4 ml-2 mb-0 p-text-white text-uppercase d-none d-lg-inline-block" >User profile</Link>
                        <Link to={`/users/${userid}`} className="p-h4 ml-2 mb-0 p-text-white text-uppercase d-none d-lg-inline-block" >
  Users
</Link>

                        {/* <!-- Form --> */}
                        <form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
                            <div className="form-group mb-0">
                                <div className="input-group input-group-alternative">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-search"></i></span>
                                    </div>
                                    <input className="form-control mt-0" placeholder="Search People" type="text"/>
                                </div>
                            </div>
                        </form>
                        {/* <!-- User --> */}
                        <ul className="navbar-nav align-items-center d-none d-md-flex" style={{color: 'white'}}>
                            <li className="nav-item dropdown">
                            
                                <a className="nav-link pr-0" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <div className="media align-items-center">
                                        <span className="avatar avatar-sm rounded-circle">
                                            <img alt="Image placeholder" src={profileImage}/>
                                        </span>
                                        <div className="media-body ml-2 d-none d-lg-block">
                                            <span className="mb-0 text-sm  font-weight-bold">{firstName}{" "}{lastName}</span>
                                        </div>
                                    </div>
                                </a>
                           
                                <div id="myDropdown" className="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                                    <div className=" dropdown-header noti-title">
                                        <h6 className="text-overflow m-0">Welcome!</h6>
                                    </div>
                                    <a href="../examples/profile.html" className="dropdown-item">
                                        <i className="ni ni-single-02"></i>
                                        <span>My profile</span>
                                    </a>
                                    <a href="../examples/profile.html" className="dropdown-item">
                                        <i className="ni ni-settings-gear-65"></i>
                                        <span>Settings</span>
                                    </a>
                                    <a href="../examples/profile.html" className="dropdown-item">
                                        <i className="ni ni-calendar-grid-58"></i>
                                        <span>Activity</span>
                                    </a>
                                    <a href="../examples/profile.html" className="dropdown-item">
                                        <i className="ni ni-support-16"></i>
                                        <span>Support</span>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a href="#!" className="dropdown-item">
                                        <i className="ni ni-user-run"></i>
                                        <span>Logout</span>
                                    </a>
                                </div>
                            </li>
                        </ul>
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
                                <h1 className="p-display-2 p-text-white">Hello {firstName}</h1>
                                <p className="p-text-white mt-0 mb-5">This is your profile page. You can see the events you've registered for and manage your schedule.</p>
                                <a href="#!" className="p-btn p-btn-info">Edit profile</a>
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
                                        <div className="col-4 text-right">
                                            <a href="#!" className="p-btn p-btn-sm p-btn-info">Settings</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-card-body">
                                    <form className="userInfo">
                                        <h6 className="heading-small mb-4">User information</h6>
                                        <div className="pl-lg-4">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form-group focused">
                                                        <label className="form-control-label" for="input-username">Username</label>
                                                        <input type="text" id="input-username" className="p-form-control form-control-alternative" placeholder="Username" value={firstName} />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <label className="form-control-label" for="input-email">Email address</label>
                                                        <input type="email" id="input-email" className="p-form-control form-control-alternative" placeholder="email" value={email} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form-group focused">
                                                        <label className="form-control-label" for="input-first-name">First name</label>
                                                        <input type="text" id="input-first-name" className="p-form-control form-control-alternative" placeholder="First name" value={firstName} />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group focused">
                                                        <label className="form-control-label" for="input-last-name">Last name</label>
                                                        <input type="text" id="input-last-name" className="p-form-control form-control-alternative" placeholder="Last name" value={lastName} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form-group focused">
                                                        <label className="form-control-label" for="input-dob">Date of Birth</label>
                                                        <input type="date" id="input-dob" className="p-form-control form-control-alternative" placeholder="Date of Birth"  />
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
                                                        <input id="input-address" className="p-form-control form-control-alternative" placeholder="Home Address" value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" type="text" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <div className="form-group focused">
                                                        <label className="form-control-label" for="input-city">City</label>
                                                        <input type="text" id="input-city" className="p-form-control form-control-alternative" placeholder="City" value="New York" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="form-group focused">
                                                        <label className="form-control-label" for="input-country">Country</label>
                                                        <input type="text" id="input-country" className="p-form-control form-control-alternative" placeholder="Country" value="United States" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="form-group">
                                                        <label className="form-control-label" for="input-postal-code">Postal code</label>
                                                        <input type="number" id="input-postal-code" className="p-form-control form-control-alternative" placeholder="Postal code" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form-group focused">
                                                        <label className="form-control-label" for="input-phoneNumber">Phone Number</label>
                                                        <input type="number" id="input-phoneNumber" className="p-form-control form-control-alternative" placeholder="Phone Number"  />
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
                                                <textarea rows="4" className="p-form-control form-control-alternative" placeholder="A few words about you ...">
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
            
        </div>

    );

}
export default Profile;