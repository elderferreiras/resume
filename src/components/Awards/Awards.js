import React from 'react';
import Award from "./Award";

const Awards = (props) => {
    const awardsList = props.awards.map(award => {
        return <Award title={award.title} description={award.description}/>
    });

    return (
        <section className="resume-section reference-section mb-5">
            <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Awards</h2>
            <div className="resume-section-content">
                <ul className="list-unstyled resume-awards-list">
                    {awardsList}
                </ul>
            </div>
        </section>
    );
};

export default Awards;