import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Profile from './pages/profile';
import BioMake from './pages/biomake';
import Signup from './pages/signup';

export default function App() {
  return (
    <Router>
      <div className="bg-gradient min-h-screen  text-primary font-comfortaa">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Profile />} />
          <Route path='biomake' element={<BioMake />} />
        </Routes>
      </div>
    </Router>
  );
}