import { motion } from 'framer-motion';
import PropTypes from 'prop-types'; 
const color = [
  {
    bg: "#b3dcf2",
    border: "rgb(167 243 208)",
  },
  {
    bg: "#caa6f7",
    border: "rgb(253 230 138)",
  },
  {
    bg: "#bbf7d0",
    border: "rgb(191 219 254)",
  },
  {
    bg: "#FDBD6E",
    border: "rgb(196 181 253)",
  },
];

const SkillCard = ({ data, idx }) => {
  return (
    <motion.div
      className='skillcard'
      style={{ backgroundColor: color[idx % 4].bg, boxShadow: `4px 4px 0px ${color[idx % 4].border}` }}
      whileHover={{ scale: 1.1 }} whileTap={{scale:0.8}}
    >
      <i className={data.icon}></i> {data.name}
    </motion.div>
  );
}
SkillCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
  idx: PropTypes.number.isRequired,
};

export default SkillCard;
