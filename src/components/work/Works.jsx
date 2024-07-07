import React from "react";
import "./works.scss"
import WorkCard from '../workcard/WorkCard'
import { jobsData } from "../../jobdata";
import { motion } from 'framer-motion';


const Works = () => {
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
    <motion.div className="works" variants={variants} initial="initial" whileInView="animate">
      <motion.div className="wrapper">
        <motion.div className="wrap">
          <motion.div className="heading">Code : work</motion.div>
          <motion.div className="lists">
            
          {jobsData.map((job, index) => (
            <WorkCard key={index} job={job} />
          ))}

          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Works;
