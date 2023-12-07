import logo from "./logo.svg";
import "./App.css";
import LoginHome from "./Login";
import Dashboard from "./Dashboard";
import {
  Route,
  Routes,
  Router,
} from "react-router-dom";
import SignUpUser from "./Login/SignUpUser/SignUpUser";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginHome />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<SignUpUser />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
