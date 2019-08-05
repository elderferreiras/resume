import React from 'react';

const Tag = (props) => {
    return (
        <li className="list-inline-item">
            <span className="badge badge-light">
                {props.name}
            </span>
        </li>
    );
};

export default Tag;