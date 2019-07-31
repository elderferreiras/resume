import React from 'react';
import Institution from "./Institution";

const Education = (props) => {
    const educations = props.education.map((education) => {
        return (
            <Institution institution={education}/>
        );
    });

    return (
        <section className="resume-section education-section mb-5">
            <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Education</h2>
            <div className="resume-section-content">
                <ul className="list-unstyled">
                {educations}
                </ul>
            </div>
        </section>
    );
};

export default Education;