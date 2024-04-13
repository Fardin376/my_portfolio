// @ts-nocheck
import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles.js';
import { services } from '../constants/constants.js';
import { fadeIn, textVariant } from '../utils/motion.js';
import { SectionWrapper } from '../hoc/index.js';

const ServiceCard = ({ title, icon, index }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full red-blue-gradient p-[1px] rounded-[20px] shadow-inner"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] min-h-[280px] flex justify-evenly items-center flex-col py-5 px-12"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary leading-[30px] text-[18px] max-w-3xl"
      >
        As an adept software developer, I specialize in TypeScript and
        JavaScript, with a strong command of frameworks such as React, Next.js,
        Node.js, and Three.js. Renowned for my quick learning abilities and
        collaborative spirit, I partner closely with clients to develop
        efficient, scalable, and user-centric solutions tailored to address
        real-world challenges. Let's team up and turn your concepts into
        impactful digital solutions!
      </motion.p>

      <div className="mt-10 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
