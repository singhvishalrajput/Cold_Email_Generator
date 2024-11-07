// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainContent from './MainContent';
import AboutUs from './AboutUs'; // Import the About Us component

function App() {
    return (
      <Router>
        <div className="App" style={{ backgroundColor: '#eaeaea', minHeight: '100vh' }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/about" element={<AboutUs />} /> {/* Add About Us route */}
          </Routes>
        </div>
      </Router>
    );
}

export default App;
