import React from 'react';
import CareerSummary from "../CareerSummary/CareerSummary";
import WorkExperience from "../Experience/WorkExperience";
import Skills from "../Skills/Skills";
import Education from "../Education/Education";
import Awards from "../Awards/Awards";
import Languages from "../Languages/Languages";
import Interests from "../Interests/Interests";

const Body = (props) => {
    return (
        <div className="resume-body p-5">
            <CareerSummary summary={props.body.careerSummary}/>
            <div className="row">
                <div className="col-lg-9">
                    <section className="resume-section experience-section mb-5">
                        <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Work
                            Experience</h2>
                        <div className="resume-timeline position-relative">
                            <WorkExperience experiences={props.body.workExperiences}/>
                        </div>
                    </section>
                </div>
                <div className="col-lg-3">
                    <Skills skills={props.sections.skills}/>
                    <Education education={props.sections.education}/>
                    <Awards awards={props.sections.awards}/>
                    <Languages languages={props.sections.languages}/>
                    <Interests interests={props.sections.interests}/>
                </div>
            </div>
        </div>
    );
};

export default Body;