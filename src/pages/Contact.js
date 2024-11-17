import React from 'react';
import {
  ImGithub,
  ImLinkedin,
} from 'react-icons/im';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      transition={{ duration: 0.5 }} 
      className='section bg-white-100 flex items-center justify-center min-h-screen'
    >
      <div className='container mx-auto px-4 py-16'>
        <div className='flex flex-col items-center gap-y-12 text-center'>
          <motion.h1
            initial={{ y: -20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            exit={{ y: -20, opacity: 0 }} 
            transition={{ duration: 0.5 }} 
            className='h1'
          >
            Contact Me
          </motion.h1>
          <motion.p 
            initial={{ y: -20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            exit={{ y: -20, opacity: 0 }} 
            transition={{ duration: 0.5 }} 
            className='text-lg'
          >
            Looking to bring data analytics expertise to your project? Feel free to reach out
          </motion.p>
          <motion.p 
            initial={{ y: -20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            exit={{ y: -20, opacity: 0 }} 
            transition={{ duration: 0.5 }} 
            className='text-lg'
          >
            —I'd love to discuss how I can help make your vision a reality!
          </motion.p>
          <div className='flex gap-x-8'>
            {socialLinks.map(({ icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={`Visit my ${label}`}
                className='text-2xl transition-transform transform hover:scale-110'
                initial={{ y: 20, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                exit={{ y: 20, opacity: 0 }} 
                transition={{ duration: 0.3 }}
              >
                {icon}
              </motion.a>
            ))}
          </div>
          <div className='mt-8'>
            <motion.p 
              initial={{ y: -20, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              exit={{ y: -20, opacity: 0 }} 
              transition={{ duration: 0.5 }} 
              className='text-lg'
            >
              You can also reach me at:
            </motion.p>
            <a 
              href='mailto:your-email@example.com' 
              className='text-blue-600 underline'
            >
              saxenanika08@gmail.com
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const socialLinks = [
  { icon: <ImGithub />, href: 'https://github.com/Anikas8', label: 'Github' },
  { icon: <ImLinkedin />, href: 'https://www.linkedin.com/in/anika-saxena-063b44228/', label: 'LinkedIn' },
];

export default Contact;
