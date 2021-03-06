import React from 'react';

const TechnologyUsed = (props) => {
    return (
        <li className="list-inline-item">
            <span className="badge badge-primary badge-pill">
                {props.technology}
            </span>
        </li>
    );
};

export default TechnologyUsed;