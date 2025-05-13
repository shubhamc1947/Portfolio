import "./skills.scss";
import SkillCard from "../skillcard/SkillCard";
import { motion } from 'framer-motion';

const skillsdata = [
  { name: "JavaScript", icon: "fa-brands fa-js" },
  { name: "TypeScript", icon: "fa-brands fa-js" },
  { name: "React.js", icon: "fa-brands fa-react" },
  { name: "Next.js", icon: "fa-brands fa-react" },
  { name: "Node.js", icon: "fa-brands fa-node-js" },
  { name: "Express", icon: "fa-brands fa-node-js" },
  { name: "Go", icon: "fa-solid fa-code" },
  { name: "Python", icon: "fa-brands fa-python" },
  { name: "Java", icon: "fa-brands fa-java" },
  { name: "MongoDB", icon: "fa-solid fa-database" },
  { name: "MySQL", icon: "fa-solid fa-database" },
  { name: "PostgreSQL", icon: "fa-solid fa-database" },
  { name: "DynamoDB", icon: "fa-solid fa-database" },
  { name: "AWS EC2", icon: "fa-brands fa-aws" },
  { name: "AWS S3", icon: "fa-brands fa-aws" },
  { name: "AWS ECS", icon: "fa-brands fa-aws" },
  { name: "AWS EKS", icon: "fa-brands fa-aws" },
  { name: "AWS CloudFront", icon: "fa-brands fa-aws" },
  { name: "Docker", icon: "fa-brands fa-docker" },
  { name: "Firebase", icon: "fa-solid fa-fire" },
  { name: "Framer Motion", icon: "fa-solid fa-film" },
  { name: "Redux Toolkit", icon: "fas fa-toolbox" },
  { name: "Git", icon: "fa-brands fa-git" },
  { name: "Jira", icon: "fa-brands fa-jira" },
  { name: "Bash", icon: "fas fa-terminal" },
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