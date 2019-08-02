import React from 'react';
import SkillType from "./SkillType";

const Skills = (props) => {
    const skills = props.skills.map((skill) => {
        return (<SkillType type={skill.type} skills={skill.skills}/>);
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