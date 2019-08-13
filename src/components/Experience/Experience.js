import React from 'react';
import Timeline from "./Timeline/Timeline";
import Description from "./Description/Description";

const Experience = (props) => {
    const workExperiences = props.experiences.map((experience, index) => {
        const articleClass = index === props.experiences.length - 1 ? '' : 'pb-5';
        return (

            <article className={`resume-timeline-item position-relative ${articleClass}`} key={'experience-' + experience.title}>
                <Timeline experience={experience}/>
                <Description experience={experience}/>
            </article>
        );
    });
    return (
        <section className="resume-section experience-section mb-5">
            <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">{props.type}</h2>
            <div className="resume-timeline position-relative">
                {workExperiences}
            </div>
        </section>
    );
};

export default Experience;