import React from 'react';

const Language = (props) => {
    return (
        <li className="mb-2">
            <span className="resume-lang-name font-weight-bold">{props.language}</span>
            <small className="text-muted font-weight-normal"> ({props.proficiency})</small>
        </li>
    );
};

export default Language;