import React from 'react';
import { Link } from 'react-router-dom';
import viberr from '../img/portfolio/6.png';
import newProjectImage1 from '../img/portfolio/1.jpg';
import newProjectImage2 from '../img/portfolio/2.png';
import newProjectImage3 from '../img/portfolio/3.jpg';
import newProjectImage4 from '../img/portfolio/4.jpg';
import newProjectImage5 from '../img/portfolio/5.jpg';
import { motion } from 'framer-motion';

// Animation transitions
const cardTransition = {
  type: "spring",
  stiffness: 300,
  damping: 20,
};

const ProjectCard = ({ src, link, h3, p }) => (
  <motion.a 
    href={link} 
    target="_blank" 
    rel="noopener noreferrer" 
    className='flex flex-col items-center text-center transition-transform duration-200 ease-in-out transform hover:scale-105'
    initial={{ opacity: 0, y: 20 }} 
    animate={{ opacity: 1, y: 0 }} 
    exit={{ opacity: 0, y: 20 }} 
    transition={cardTransition}
  >
    <motion.img 
      src={src} 
      alt={h3} 
      className='max-w-[250px] bg-gray-200 rounded-2xl' // Adjusted background color for cards
      whileHover={{ scale: 1.05 }}
      transition={cardTransition}
    />
    <h3 className='mt-4 text-xl font-semibold'>{h3}</h3>
    <p className='mt-2 text-base'>{p}</p>
  </motion.a>
);

const projects = [
  {
    src: viberr,
    link: "https://github.com/Anikas8/Olympic-2024",
    h3: "Paris Olympic Dashboard",
    p: "Power BI dashboard providing interactive insights into Paris Olympics data.",
  },
  {
    src: newProjectImage1,
    link: "https://github.com/Anikas8/Diabetes-Pred",
    h3: "Diabetes Prediction Using ML",
    p: "Predicts Diabetes risk using health data and ML models",
  },
  {
    src: newProjectImage2,
    link: "https://github.com/Anikas8/Heart-Pred",
    h3: "Heart Disease",
    p: "Predict Heart Disease risk with ML",
  },
  {
    src: newProjectImage3,
    link: "https://github.com/Anikas8/Paralympics-2024",
    h3: "Paris Paralymmpic Data Analysis",
    p: "Analyzing Paralympic data for performance trends",
  },
  {
    src: newProjectImage4,
    link: "https://github.com/Anikas8/HR-Analytics",
    h3: "HR Analytic",
    p: "HR analytics with Python, SQL, Power BI",
  },
  {
    src: newProjectImage5,
    link: "https://github.com/Anikas8/Road-Safety-and-Accident-Patterns-in-India",
    h3: "Road Safety and Accident Patterns in India",
    p: "Analyzing road safety and accident patterns in India using Qlik",
  },
];

function Projects() {
  return (
    <motion.section 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      transition={{ duration: 0.5 }}
      className='section bg-white-200 flex items-center justify-center min-h-screen pt-32' // Updated background color
    >
      <div className='container mx-auto px-4 py-16 max-h-[90vh] overflow-y-auto'>
        <div className='flex flex-col items-center gap-y-12 text-center'>
          <h1 className='h1 mt-8'>Projects</h1>
          <p className='text-lg'>
            Here are some of my recent projects. Click on the images to learn more!
          </p>
          <Link to="/contact" className="btn mb-6">Get in Touch</Link>
          <div className='overflow-y-auto flex flex-col items-center gap-8 md:flex-row md:flex-wrap md:justify-evenly p-0 md:p-8'>
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                src={project.src}
                link={project.link}
                h3={project.h3}
                p={project.p}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
