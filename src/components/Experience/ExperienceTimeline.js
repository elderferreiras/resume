import React from 'react';

const ExperienceTimeline = (props) => {
    let extra = '';

    if (props.experience.subtitle) {
        extra = (<small className="text-muted">{props.experience.subtitle}</small>);
    }

    return (
        <div className="resume-timeline-item-header mb-2">
            <div className="d-flex flex-column flex-md-row">
                <h3 className="resume-position-title font-weight-bold mb-1">{props.experience.title} {extra}</h3>
                {props.experience.companyUrl ? (
                    <div className="resume-company-name ml-auto"><a href={props.experience.companyUrl} target='_blank' rel='noopener noreferrer'>{props.experience.company}</a></div>
                ) : (
                    <div className="resume-company-name ml-auto">{props.experience.company}</div>
                )}
            </div>
            <div className="resume-position-time">{props.experience.beginDate} - {props.experience.endDate}</div>
        </div>
    );
};

export default ExperienceTimeline;