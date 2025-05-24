import "./navbar.scss";
import { Tooltip } from 'react-tooltip'
import "react-tooltip/dist/react-tooltip.css"; 
import { motion } from "framer-motion";
import Resume from '../../assets/Shubham-1YOE-Software-Engineer.pdf';
const Navbar = () => {
  const variants = {
    initial: {
      y: -50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type:"spring",
        stiffness:100
      },
    },
  };
  const handleScroll = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const offsetTop = target.offsetTop - 80; // 80px gap
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };
  
  return (
    <motion.div className="navbar">
      <motion.div className="wrapper" >
        <motion.div className="navlists" variants={variants}
            initial="initial"
            animate="animate" >
          <motion.div className="list"><a href="#home" onClick={(e) => handleScroll(e, "home")}>/</a></motion.div>
          <motion.div className="list"><a href="#worksection" onClick={(e) => handleScroll(e, "worksection")}>WORK</a></motion.div>
          <motion.div className="list"><a href="#projectsection" onClick={(e) => handleScroll(e, "projectsection")}>PROJECT</a></motion.div>
        </motion.div>
        <motion.div className="cvwrap"  data-tooltip-id="cv" data-tooltip-content="Download">
          <a href={Resume} download={true}  target="_blank" >CV</a>
        </motion.div>
      </motion.div>
          <Tooltip id="cv" className="tooltipcustom" />
    </motion.div>
  );
};

export default Navbar;
