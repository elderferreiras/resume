import React from 'react';
import Header from "./Header/Header";
import Body from "./Body/Body";

const Common = (props) => {
    return (
        <article className="resume-wrapper text-center position-relative">
            <div className="resume-wrapper-inner mx-auto text-left bg-white shadow-lg">
                <Header header={props.state.header}/>
                <Body body={props.state.body} sections={props.state.sections}/>
            </div>
        </article>
    );
};

export default Common;