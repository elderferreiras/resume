import React from 'react';
import Metadata from "../Metadata/Metadata";

const PrimaryInfo = (props) => {
    const metadata = props.metadata.map((metadata, key) => {
        return (<Metadata class={metadata.class} icon={metadata.icon} transform={metadata.transform} value={metadata.value}/>);
    });

    return (
        <div className="primary-info">
            <h1 className="name mt-0 mb-1 text-white text-uppercase text-uppercase">{props.name}</h1>
            <div className="title mb-3">{props.title}</div>
            <ul className="list-unstyled">
                {metadata}
            </ul>
        </div>
    );
};

export default PrimaryInfo;