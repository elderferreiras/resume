import React from 'react';

const ProfileMetadata = (props) => {
    return (
        <li className={props.class} key={props.index}>
            <a href="#">
                <i className={props.item} data-fa-transform={props.transform}/>
               {props.value}
            </a>
        </li>
    );
};

export default ProfileMetadata;