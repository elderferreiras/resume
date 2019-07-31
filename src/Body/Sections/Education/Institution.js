import React from 'react';

const Institution = (props) => {
    return (
        <li className="mb-2">
            <div className="resume-degree font-weight-bold">{props.institution.degree}</div>
            <div className="resume-degree-org">{props.institution.university}</div>
            <div className="resume-degree-time">{props.institution.beginDate} - {props.institution.endDate}</div>
        </li>
    );
};

export default Institution;