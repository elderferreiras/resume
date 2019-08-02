import React from 'react';

const CareerSummary = (props) => {
    return (
        <section className="resume-section summary-section mb-5">
            <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Career Summary</h2>
            <div className="resume-section-content">
                <p className="mb-0">{props.summary}</p>
            </div>
        </section>
    );
};

export default CareerSummary;