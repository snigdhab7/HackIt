
import {Router, Route, Routes,HashRouter } from 'react-router-dom';
import SignUpUser from './Login/SignUpUser/SignUpUser';
import EventDetails from './EventDetails/EventDetails';
// import logo from "./logo.svg";
import "./App.css";
import LoginHome from "./Login";
import Dashboard from "./Dashboard";
import Profile from "./Profile/Profile";
import SignInUser from "./Login/SignInUser/SignInUser";
import Events from './ExternalApi/Events';
import React, { useState } from "react";
import Users from './Profile/Users/Users';
import SignInOrganizer from './Login/SignInOrganizer/SignInOrganizer';
import SignUpOrganizer from './Login/SignUpOrganizer/SignUpOrganizer';
import SignUpUserDetails from './Login/SignUpUserDetails/SignUpUserDetails';
import MyEvents from './Dashboard/myEvents';
import About from './Dashboard/About';
import PublicProfile from './publicProfile/PublicProfile';
function App() {
  
  return (
    <div className="App">
      <HashRouter>
        <Routes>
        <Route path="/" element={<Dashboard />} />            {/* when user logged in */}
        <Route path="/:id" element={<Dashboard />} />          {/* when user not logged in */}
          <Route path="/Dashboard/signIn" element={<LoginHome />}/>
          <Route path="/Dashboard/signUp" element={<LoginHome />} />
          <Route path="/signup/user" element={<SignUpUser />} />
          <Route path="/signup/organizer" element={<SignUpOrganizer />} />
          <Route path="/:id/about" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route
  path="/signin/organizer"
  element={<SignInOrganizer />}
/>
<Route
  path="/signup/details/:id"
  element={<SignUpUserDetails />}
/>
<Route
  path="/signin/user"
  element={<SignInUser />}
/>
<Route
  path="/:id/myEvents"
  element={<MyEvents />}
/>

          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/profile/:id/publicProfile/:profileId" element={<PublicProfile />} />
          <Route path="/profile/publicProfile/:profileId" element={<PublicProfile />} />
          <Route path="/users/:id" element={<Users />} />
          <Route path="/events/:userid/:eventId" element={<EventDetails/>}/>    {/* when user logged in */}
          <Route path="/events/:eventId" element={<EventDetails/>}/>          {/* when user not logged in */}
          //added below routes to just check external API events
          <Route path="/getEvents" element={<Events/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
