import React from 'react';
import WomanImg from '../img/home/Anika Saxena Home.jpg'; // Adjust this path if needed
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';

const Home = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className='section'
    >
      <div className='container mx-auto min-h-screen relative flex flex-col lg:flex-row items-center'>
        {/* Scrollable Text and Image Wrapper */}
        <div className='flex flex-col justify-center w-full lg:w-1/2 lg:pr-10 max-h-[100vh] overflow-y-auto'>
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-50%' }}
            transition={transition1}
            className='pt-36 pb-14 lg:pt-0 lg:pb-0 z-10 flex flex-col justify-center items-center lg:items-start'
          >
            <h1 className='h1'>Anika <br /> Saxena</h1>
            <p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12'>Bhopal, India</p>
            <Link to='/contact' className='btn mb-[30px]'>Hire me</Link>
          </motion.div>
        </div>        
        {/* Image */}
        <div className='flex justify-center lg:justify-end w-full lg:w-1/2'>
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            transition={transition1}
            src={WomanImg} 
            alt="Anika Saxena" 
            className='max-w-full h-auto' 
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
