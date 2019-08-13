import React from 'react';
import CareerSummary from "../../CareerSummary/CareerSummary";
import Experience from "../../Experience/Experience";
import Skills from "../../Skills/Skills";
import Education from "../../Education/Education";
import Languages from "../../Languages/Languages";
import Interests from "../../Interests/Interests";

const Body = (props) => {
    return (
        <div className="resume-body p-5">
            <CareerSummary summary={props.body.careerSummary}/>
            <div className="row">
                <div className="col-lg-9">
                    <Experience experiences={props.body.workExperiences} type="Work Experience"/>
                    <Experience experiences={props.body.researchExperiences} type="Research"/>
                    <Experience experiences={props.body.personalProjects} type="Personal Projects"/>
                    <Experience experiences={props.body.volunteerExperiences}  type="Volunteer Experience"/>
                </div>
                <div className="col-lg-3">
                    <Skills skills={props.sections.skills}/>
                    <Education education={props.sections.education}/>
                    <Languages languages={props.sections.languages}/>
                    <Interests interests={props.sections.interests}/>
                </div>
            </div>
        </div>
    );
};

export default Body;