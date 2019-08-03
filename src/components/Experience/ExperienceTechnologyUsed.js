import React from 'react';

const ExperienceTechnologyUsed = (props) => {
    return (
        <li className="list-inline-item">
            <span className="badge badge-primary badge-pill">
                {props.technology}
            </span>
        </li>
    );
};

export default ExperienceTechnologyUsed;