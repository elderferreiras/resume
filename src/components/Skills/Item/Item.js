import React from 'react';

const Item = (props) => {
    const style = {
        width: `${props.percent}%`
    };

    return (
        <li className="mb-2">
            <div className="resume-skill-name">{props.name}</div>
            <div className="progress resume-progress">
                <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={style}
                     aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"/>
            </div>
        </li>
    );
};

export default Item;