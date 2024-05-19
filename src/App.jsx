
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Profile from './pages/profile';


export default function App() {
  return (
    <Router>
      <div className="bg-gradient h-screen text-primary font-comfortaa" >
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Profile />} />
          
        </Routes>
      </div>
    </Router>
  );
}
