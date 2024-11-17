import React from 'react';
import WomanImg from '../img/about/Anika Saxena About.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions'; // Make sure this import is correct

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className='section'
    >
      <div className='container mx-auto h-full relative'>
        {/* text image wrapper */}
        <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
          {/* text on mobile first */}
          <motion.div
            initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-50%' }}
            transition={transition1}
            className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start order-1 lg:order-2'
          >
            <header>
              <h1 className='h1'>About Me</h1>
            </header>
            <p>
              Hey, I'm Anika! I'm passionate about Artificial Intelligence, Machine Learning, and Data Analytics. I love exploring new technologies, learning from data, and using insights to solve real-world problems.
            </p>
            <br />
            <p>
              When I'm not coding or analyzing data, you'll probably find me cooking up something delicious, strumming my guitar, or getting lost in a good book.
            </p>
            <div className='mt-6'>
              <Link to={'/Portfolio'} className='btn'>View My Work</Link>
            </div>
          </motion.div>

          {/* image on mobile last */}
          <motion.div
            className='flex-1 order-2 lg:order-1 overflow-hidden gap-2'
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.05 }}  // Slightly increase size on hover
            transition={transition1}
          >
            <img
              className='w-[70%] h-[70%] object-cover shadow-xl hover:shadow-2xl transition-shadow duration-300'
              src={WomanImg}
              alt="A woman representing creativity and inspiration"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
