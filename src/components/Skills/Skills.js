import React from 'react';
import Type from "./Type/Type";

const Skills = (props) => {
    const skills = props.skills.map((skill) => {
        return (<Type type={skill.type} skills={skill.skills} key={skill.type + props.skills.join('')}/>);
    });

    return (
        <section className="resume-section skills-section mb-5">
            <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Skills &amp; Tools</h2>
            <div className="resume-section-content">
                {skills}
            </div>
        </section>
    );
};

export default Skills;