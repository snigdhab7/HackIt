import logo from "./logo.svg";
import "./App.css";
import LoginHome from "./Login";
import Dashboard from "./Dashboard";
import Profile from "./Profile/Profile";
import {
  Route,
  Routes,
  HashRouter,
} from "react-router-dom";

import SignUpUser from "./Login/SignUpUser/SignUpUser";
import SignInUser from "./Login/SignInUser/SignInUser";


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

        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
