import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles.js';
import { github, demo } from '../assets/index.js';
import { SectionWrapper } from '../hoc/index.js';
import { projects } from '../constants/constants.js';
import { fadeIn, textVariant } from '../utils/motion.js';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  projectCard_bg,
  source_code_link,
  demo_link,
}) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
      className="card-bg-image rounded-2xl"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="card-bg_morph parallax-effect-glare-scale p-5 rounded-2xl sm:w-[360px] w-full h-[30rem] shadow-[#f88a9c9a] shadow-inner"
      >
        <div className="relative w-full h-[230px] inner-element">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 gap-2">
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            <div
              onClick={() => window.open(demo_link, '_blank')}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={demo}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5 inner-element">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 inner-element">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Works</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following section showcases a diverse range of web application
          projects, each offering a glimpse into my expertise and
          problem-solving capabilities. These projects highlight my proficiency
          in web development technologies like React, Node.js, and Next.js. With
          live demos and GitHub repositories provided for each project, visitors
          can explore the codebase and experience the functionality firsthand.
          <br />
          P.S These projects were created for learning purposes only.
        </motion.p>
      </div>

      <div className="mt-10 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, '');
