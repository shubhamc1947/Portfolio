import React from "react";
import "./workcard.scss";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";


const WorkCard = ({ job }) => {
  return (

        <div className="workcard">
          <div className="top">
            <div className="leftcard">
              <div className="companyname" data-tooltip-id={`${job.id+120}`}
                  data-tooltip-content={job.specialNote} >Weknow Technology .</div>
                  <Tooltip
                    key={job.id + 500}
                    id={job.id+120}
                    className="tooltipcustom"
                  />
            </div>
            <div className="righcard">
              <div className="type">Offine, Lucknow</div>
              <div className="duration">. October 2023 - March 2024</div>
            </div>
          </div>
          <div className="middle">
            <div className="rolename">{job.roleName}</div>
            <ul>
                {job.workExperience.map((element, idx) => (
                <li key={idx}>{element}</li>
                ))}
                
            </ul>
          </div>
          <div className="bottom">
            <div className="img"><i className="fa-solid fa-code"></i></div>
            <div className="techstack">{job.techStack}</div>
          </div>
        </div>

  );
};

export default WorkCard;
