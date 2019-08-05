import React from 'react';
import Interest from "./Interest/Interest";

const Interests = (props) => {
    const interests = props.interests.map((interest) => {
        return (<Interest interest={interest.interest}/>);
    });

    return (
        <section className="resume-section interests-section mb-5">
            <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Interests</h2>
            <div className="resume-section-content">
                <ul className="list-unstyled">
                    {interests}
                </ul>
            </div>
        </section>
    );
};

export default Interests;