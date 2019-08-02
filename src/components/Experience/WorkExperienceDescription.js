import React from 'react';
import WorkExperienceTechnologyUsed from "./WorkExperienceTechnologyUsed";

const WorkExperienceDescription = (props) => {
    const technologies = props.experience.technologies.map((technology) => {
        return (<WorkExperienceTechnologyUsed technology={technology}/>);
    });
    return (
        <div className="resume-timeline-item-desc">
            <p>{props.experience.description}</p>
            <h4 className="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
            <ul className="list-inline">
               {technologies}
            </ul>
        </div>
    );
};

export default WorkExperienceDescription;