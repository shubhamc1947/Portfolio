import "./works.scss";
import WorkCard from '../workcard/WorkCard';
import { jobsData } from "../../jobdata";
import { motion } from 'framer-motion';
import { scrollTopAnimation, staggerCardVarient } from "../../store/utils";

const Works = () => {


  return (
    <motion.div className="works">
      <motion.div className="wrapper">
        <motion.div 
          className="wrap" 
          variants={scrollTopAnimation} 
          initial="initial" 
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="heading">Code : Work</motion.div>
          <motion.div className="lists">
            {jobsData.map((job, index) => (
              <motion.div 
                key={index}
                variants={staggerCardVarient}
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