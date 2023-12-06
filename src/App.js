import logo from "./logo.svg";
import "./App.css";
import LoginHome from "./Login";
import Dashboard from "./Dashboard";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
function App() {
  return (
    <HashRouter>
      <div className="App">
      <Routes>
          <Route path="/" element={<Navigate to="loginhome" />} />
          <Route path="/loginhome" element={<LoginHome />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        {/* <LoginHome /> */}
      </div>
    </HashRouter>
  );
}

export default App;
