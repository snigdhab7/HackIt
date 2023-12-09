
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


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Dashboard/signIn" element={<LoginHome isSignIn={true}/>}/>
          <Route path="/Dashboard/signUp" element={<LoginHome isSignIn={false}/>} />
          <Route path="/signup" element={<SignUpUser />} />
          <Route path="/signin" element={<SignInUser />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/eventdetails" element={<EventDetails/>}/>
          //added below routes to just check external API events
          <Route path="/getEvents" element={<Events/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
