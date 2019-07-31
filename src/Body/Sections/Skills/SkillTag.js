import React from 'react';

const SkillTag = (props) => {
    return (
        <li className="list-inline-item">
            <span className="badge badge-light">
                {props.name}
            </span>
        </li>
    );
};

export default SkillTag;