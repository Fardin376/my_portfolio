import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles.js';
import { ComputerCanvas } from './canvas/index.js';
import { slideIn } from '../utils/motion.js';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#e61c3e]" />
          <div className="w-1 sm:h-80 h-40 red-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi I'm <span className="text-[#e61c3e]">Fardin</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100`}>
            I develop immersive and dynamic web experiences.{' '}
            <br className="sm:block hidden" />{' '}
            <span className="text-[20px] text-[#e61c3e] font-bold italic">
              Let's bring your ideas to life!
            </span>
          </p>
        </div>
      </div>

      <div className="w-full mx-auto flex items-center justify-center absolute inset-0 top-[-20px]">
        <ComputerCanvas />
        <div className="absolute xs:bottom-10 md:bottom-10 bottom-4 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
