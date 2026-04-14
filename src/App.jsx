import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import Login from "./login"; 
import SignUp from "./signup";
import HabitTracker from "./habitTracker";
import Dashboard from "./dashboard";
import MoodTracker from "./moodTrackerTemp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />       {/* Home page */}
        <Route path="/login" element={<Login />} /> {/* Login page */}
        <Route path="/signup" element={<SignUp />} /> {/* Signup page */}
        <Route path="/habitTracker" element={<HabitTracker />}/>
        <Route path="/moodTracker" element={<MoodTracker/>}></Route>
        <Route path="/dashboard" element={<Dashboard />} />
        
      </Routes>
    </Router>
  )
}

export default App;
