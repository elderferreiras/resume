import React from 'react';

const Metadata = (props) => {
    return (
        <li className={props.class} key={props.index}>
            <a href={props.value === 'elderpattenferreira@gmail.com'? 'mailto:elderpattenferreira@gmail.com' : 'tel:' + props.value}>
                <i className={props.item} data-fa-transform={props.transform}/>
               {props.value}
            </a>
        </li>
    );
};

export default Metadata;