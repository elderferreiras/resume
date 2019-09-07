import React from 'react';

const SocialMedia = (props) => {
    return (
        <li className="mb-3">
            <a href={"https://" + props.url} target="_blank" rel="noopener noreferrer">
                <span className="fa-container text-center mr-2">
                    <i className={props.class}/>
                </span>
                {props.label? props.label : props.url}
            </a>
        </li>
    );
};

export default SocialMedia;