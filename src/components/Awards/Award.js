import React from 'react';

const Award = (props) => {
    return (
        <li className="mb-2 pl-4 position-relative">
            <i className="resume-award-icon fas fa-trophy position-absolute" data-fa-transform="shrink-2"/>
            <div className="resume-award-name">{props.title}</div>
            <div className="resume-award-desc">{props.description}
            </div>
        </li>
    );
};

export default Award;