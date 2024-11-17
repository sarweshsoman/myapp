import React from 'react';
// import pages
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';

// import routes route and useLocation hook

import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const AnimRoutes = () => {

  const location = useLocation()

  return (
    <AnimatePresence>
      <Routes key={location.pathname} location={location}>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      {/* Add more routes as needed */}
    </Routes>
    </AnimatePresence>
    
  )
};

export default AnimRoutes;
