import React from 'react';
// Import components
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';
import { BrowserRouter as Router } from 'react-router-dom';
//import { motion } from 'framer-motion';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
     
        <Header />
        <Home />
        <AnimRoutes />
      
    </Router>
  );
};

export default App;
