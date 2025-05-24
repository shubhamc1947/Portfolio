import ProjectCard from '../projectcard/ProjectCard';
import './projects.scss';
import projectdata from  '../../projectdata';
import { motion } from 'framer-motion';
import { scrollTopAnimation, staggerCardVarient } from '../../store/utils';

const Projects = () => {
  
  return (
    <motion.div className='projects' variants={scrollTopAnimation} initial="initial" whileInView="animate">
      <div className="wrapper">
        <div className="wrap">
          
          <div className="heading">
            Code : Projects
          </div>
          <motion.div className="lists" variants={staggerCardVarient}>
            {projectdata.map((item,idx)=><ProjectCard key={idx} data={item} idx={idx}/>)}
          </motion.div>

        </div>
      </div>
    </motion.div>
  )
}

export default Projects