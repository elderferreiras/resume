import React from 'react';

const CareerSummary = (props) => {
    const summary = props.summary.map((summary, i) => {
        return (<p className="mb-0 summary-paragraph" key="resume-summary">{summary}</p>);
    });

    return (
        <section className="resume-section summary-section mb-5">
            <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Career Summary</h2>
            <div className="resume-section-content">
               {summary}
            </div>
        </section>
    );
};

export default CareerSummary;