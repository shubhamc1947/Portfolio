import React from "react";
import "./skills.scss";
import SkillCard from "../skillcard/SkillCard";
import { motion } from 'framer-motion';

const skillsdata = [
  { name: "JavaScript", icon: "fa-brands fa-js" },
  { name: "React", icon: "fa-brands fa-react" },
  { name: "MongoDB", icon: "fa-solid fa-database" },
  { name: "Node.js", icon: "fa-brands fa-node-js" },
  { name: "Express", icon: "fa-brands fa-node-js" },
  { name: "Firebase", icon: "fa-solid fa-fire" },
  { name: "Framer Motion", icon: "fa-solid fa-film" },
  { name: "Redux Toolkit", icon: "fas fa-toolbox" },
  { name: "Python", icon: "fa-brands fa-python" },
  { name: "Java", icon: "fa-brands fa-java" },
  { name: "Bash", icon: "fas fa-terminal" },
  { name: "Git", icon: "fa-brands fa-git" },
  { name: "Many More", icon: "fa-solid fa-arrow-up-right-dots" },
];


const Skills = () => {
  const variants = {
    initial: {
      y: 100,
      opacity: 0.3,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 60,
      },
    }
  };

  return (
    <motion.div className="skills" variants={variants} initial="initial" whileInView="animate">
      <motion.div className="wrapper">
        <motion.div className="cont">
          <motion.div className="wrap">
            <motion.div className="heading">Code : skills</motion.div>
            <motion.div className="lists">
              {skillsdata.map((item, idx) => (
                <SkillCard key={idx} data={item} idx={idx} />
              ))}
            </motion.div>
          </motion.div>
          <motion.div className="texthead">SKILLS</motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
