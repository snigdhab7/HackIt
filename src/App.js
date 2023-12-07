import logo from './logo.svg';
import './App.css';
import LoginHome from './Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpUser from './Login/SignUpUser/SignUpUser';
import EventDetails from './EventDetails/EventDetails';
function App() {
  return (
    <div className="App">
    
    {/* <LoginHome/> */}
    {/* <SignUpUser/> */}


    <Router>
      <Routes>
        <Route path="/" element={<LoginHome />} />
        <Route path="/signup" element={<SignUpUser />} />
        <Route path="/eventdetails" element={<EventDetails/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
