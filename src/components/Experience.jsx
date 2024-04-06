import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles.js";
import { experiences } from "../constants/constants.js";
import { SectionWrapper } from "../hoc/index.js";
import { fadeIn, textVariant } from "../utils/motion.js";

const ExperienceCard = ({ experience, index }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <motion.div
        variants={fadeIn("down", "spring", 0.5 * index, 0.75)}
        className="flex justify-center items-center w-full h-full"
      >
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </motion.div>
    }
  >
    <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p
        className="text-[16px] text-secondary font-semibold"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>What have I done so far...</p>
        <h2 className={`${styles.sectionHeadText}`}>Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
