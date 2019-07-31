import React from 'react';
import WorkExperienceTimeline from "./WorkExperienceTimeline";
import WorkExperienceDescription from "./WorkExperienceDescription";

const WorkExperience = (props) => {
    const workExperiences = props.experiences.map((experience, index) => {
        const articleClass = index === props.experiences.length - 1? '':'pb-5';
        return (
            <article className={`resume-timeline-item position-relative ${articleClass}`}>
                <WorkExperienceTimeline experience={experience}/>
                <WorkExperienceDescription experience={experience}/>
            </article>
        );
    });
    return (workExperiences);
};

export default WorkExperience;