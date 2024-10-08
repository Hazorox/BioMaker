import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Profile from "./pages/profile";
import BioMake from "./pages/biomake";
import Signup from "./pages/signup";
import NotFound from "./pages/notFound";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function App() {
  return (
    <Router>
      <div className="bg-gradient min-h-screen  text-primary font-comfortaa">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/:id" element={<Profile />} />
          <Route path="biomake/create" element={<BioMake mode='create' />} />
          <Route path="biomake/edit" element={<BioMake mode='edit' />} />
          <Route path="/notFound" element={<NotFound />} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={3500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </Router>
  );
}
