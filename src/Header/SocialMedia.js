import React from 'react';

const SocialMedia = (props) => {
    return (
        <li className="mb-3">
            <a href="#">
                <span className="fa-container text-center mr-2">
                    <i className={props.class}/>
                </span>
                {props.url}
            </a>
        </li>
    );
};

export default SocialMedia;