import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignInModal from './Pages/SignInModel';
import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
import Blog from './Pages/Blog';
import Blog_itr from './Pages/Blog_itr';
import Blog_gst from './Pages/Blog_gst';
import Blog_tax_plan from './Pages/Blog_tax_plan';
import Services from './Pages/Services';
import ProtectedRoute from './Pages/ProtectedRoute';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true'); // Persist state
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn'); // Clear state
  };

  return (
    <Router>
      <ToastContainer />
      <SignInModal
        showModal={!isLoggedIn}
        toggleModal={() => setIsLoggedIn(!isLoggedIn)}
        onLoginSuccess={handleLoginSuccess}
      />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<ProtectedRoute isLoggedIn={isLoggedIn}><AboutUs /></ProtectedRoute>} />
        <Route path="/blog" element={<ProtectedRoute isLoggedIn={isLoggedIn}><Blog /></ProtectedRoute>} />
        <Route path="/blog-itr" element={<ProtectedRoute isLoggedIn={isLoggedIn}><Blog_itr /></ProtectedRoute>} />
        <Route path="/blog-gst" element={<ProtectedRoute isLoggedIn={isLoggedIn}><Blog_gst /></ProtectedRoute>} />
        <Route path="/blog-tax-plan" element={<ProtectedRoute isLoggedIn={isLoggedIn}><Blog_tax_plan /></ProtectedRoute>} />
        <Route path="/services" element={<ProtectedRoute isLoggedIn={isLoggedIn}><Services /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
