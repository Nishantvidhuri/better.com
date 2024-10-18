import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import MortgageCalculator from './pages/MortgageCalculator';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Startpage from './pages/Startpage';

const AppContent = () => {
  const location = useLocation(); // Get the current location inside the Router

  return (
    <div>
      {/* Conditionally render Navbar except for /start route */}
      {location.pathname !== '/start' && <Navbar />}
      
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
        
        {/* About Us Page */}
        <Route path="/about-us" element={<AboutUs />} />
        
        {/* Mortgage Calculator Page */}
        <Route path="/mortgage-calculator" element={<MortgageCalculator />} />

        {/* Start Page */}
        <Route path="/start" element={<Startpage />} />
      </Routes>

      {/* Always render Footer */}
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
