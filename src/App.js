import logo from "./logo.svg";
import "./App.css";
import LoginHome from "./Login";
import Dashboard from "./Dashboard";
import {
  Route,
  Routes,
  HashRouter,
} from "react-router-dom";
import SignUpUser from "./Login/SignUpUser/SignUpUser";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<LoginHome />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<SignUpUser />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
