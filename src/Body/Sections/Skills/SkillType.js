import React from 'react';
import SkillItem from "./SkillItem";
import SkillTag from "./SkillTag";

const SkillType = (props) => {
    const items = props.skills.map((skill) => {
        if(skill.name && skill.percent) {
            return (
                <SkillItem name={skill.name} percent={skill.percent}/>
            );
        } else {
           return (<SkillTag name={skill}/>);
        }
    });

    return (
        <div className="resume-skill-item">
            <h4 className="resume-skills-cat font-weight-bold">{props.type}</h4>
            <ul className="list-unstyled mb-4">
              {items}
            </ul>
        </div>
    );
};

export default SkillType;