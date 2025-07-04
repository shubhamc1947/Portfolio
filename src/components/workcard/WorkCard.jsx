import PropTypes from "prop-types";
import { Tooltip } from "react-tooltip";
import { motion } from "framer-motion";
import "react-tooltip/dist/react-tooltip.css";
import "./workcard.scss";

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
const WorkCard = ({ job }) => {
  const tooltipId = `tooltip-${job.id}`;
  const colorIndex = Number(job.id) % 4;

  return (
    <motion.div
      className="workcard"
      style={{ boxShadow: `6px 6px 0px ${color[colorIndex].border}` }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="top">
        <div className="leftcard">
          <motion.div
            className="companyname"
            data-tooltip-id={tooltipId}
            data-tooltip-content={job.specialNote}
            whileTap={{ scale: 0.8 }}
          >
            {job.companyName}
          </motion.div>
          <Tooltip id={tooltipId} className="tooltipcustom" />
        </div>
        <div className="rightcard">
          <div className="type">{job.jobType}</div>
          <div className="duration">{job.jobDuration}</div>
        </div>
      </div>
      <div className="middle">
        <div className="rolename">{job.roleName}</div>
        <ul>
          {job.workExperience.map((line, idx) => (
            <li key={idx}>
              {line.map((fragment, i) =>
                fragment.link ? (
                  <a 
                    key={i} 
                    href={fragment.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="workCardExpAnchor"
                  >
                    {fragment.text}
                  </a>
                ) : (
                  <span key={i}>{fragment.text}</span>
                )
              )}
            </li>
          ))}
        </ul>

      </div>
      <div className="bottom">
        <div className="img">
          <i className="fa-solid fa-code"></i>
        </div>
        <div className="techstack">{job.techStack}</div>
      </div>
    </motion.div>
  );
};

WorkCard.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.number.isRequired,
    companyName: PropTypes.string.isRequired,
    specialNote: PropTypes.string,
    jobType: PropTypes.string.isRequired,
    jobDuration: PropTypes.string.isRequired,
    roleName: PropTypes.string.isRequired,
    workExperience: PropTypes.arrayOf(PropTypes.string).isRequired,
    techStack: PropTypes.string.isRequired,
  }).isRequired,
};

export default WorkCard;
