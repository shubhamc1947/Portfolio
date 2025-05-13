import "./works.scss";
import WorkCard from '../workcard/WorkCard';
import { jobsData } from "../../jobdata";
import { motion } from 'framer-motion';

const Works = () => {
  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const cardVariants = {
    initial: {
      opacity: 0,
    },
    animate: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  return (
    <motion.div className="works">
      <motion.div className="wrapper">
        <motion.div 
          className="wrap" 
          variants={variants} 
          initial="initial" 
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="heading">Code : Work</motion.div>
          <motion.div className="lists">
            {jobsData.map((job, index) => (
              <motion.div 
                key={index}
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                custom={index}
                viewport={{ once: true, amount: 0.1 }}
              >
                <WorkCard job={job} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Works;