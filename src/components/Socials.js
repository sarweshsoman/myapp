import React from 'react';
import {
  ImLinkedin,
  ImGithub,
} from 'react-icons/im';

const Socials = () => {
  return (
    <div className='hidden xl:flex ml-24'>
      <ul className='flex space-x-4'>
        <li>
          <a href="https://www.linkedin.com/in/anika-saxena-063b44228/">
            <ImLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/Anikas8">
            <ImGithub />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
