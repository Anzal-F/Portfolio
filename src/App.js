import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Home/Navbar'; // Adjust the path accordingly
import About from './components/Home/about'; // Assuming About component is defined
import Projects from './components/Home/projects'; // Assuming Projects component is defined
import Contact from './components/Home/contact'; // Assuming Contact component is defined
import Home from './pages/home'; // Assuming Home component is defined

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} /> 
        {/* Add this line for Home component */}
      </Routes>
    </Router>
  );
}

export default App;
