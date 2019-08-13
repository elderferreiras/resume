import React from 'react';
import Item from "../Item/Item";
import Tag from "../Tag/Tag";

const Type = (props) => {
    const items = props.skills.map((skill) => {
        if(skill.name && skill.percent) {
            return (
                <Item name={skill.name} percent={skill.percent} key={"type-" + skill.name}/>
            );
        } else {
           return (<Tag name={skill} key={"tag-" + skill}/>);
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

export default Type;