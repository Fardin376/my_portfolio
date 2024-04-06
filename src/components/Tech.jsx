import React from "react";
import { BallCanvas } from "./index.js";
import { techStack } from "../constants/constants.js";
import { SectionWrapper } from "../hoc/index.js";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion.js";
import { styles } from "../styles.js";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Tech Stack.</h2>
      </motion.div>

      <div className="mt-10 flex flex-row flex-wrap justify-center gap-10">
        {techStack.map((tech) => (
          <div key={tech.name} className="w-20 h-20">
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
