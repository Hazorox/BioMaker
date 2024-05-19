import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/login';
import Profile from './pages/profile';
import About from './pages/about';

export default function App() {
  const [isAuth, setIsAuth] = useState(false); // Destructure the state correctly

  return (
    <Router>
      <div>
        {isAuth ? <Navigate to="/profile/" /> : <Navigate to="/login" />}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/profile/" element={<Profile />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}