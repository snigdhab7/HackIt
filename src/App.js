
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

function App() {
  
  return (
    <div className="App">
      <HashRouter>
        <Routes>
        <Route path="/" element={<Dashboard />} />
          <Route path="/Dashboard/signIn" element={<LoginHome />}/>
          <Route path="/Dashboard/signUp" element={<LoginHome />} />
          <Route path="/signup" element={<SignUpUser />} />
          <Route
  path="/signin"
  element={<SignInUser />}
/>

          <Route path="/profile" element={<Profile />} />
          <Route path="/events/:eventId" element={<EventDetails/>}/>
          //added below routes to just check external API events
          <Route path="/getEvents" element={<Events/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
