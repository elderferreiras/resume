import React from 'react';
import Language from "./Language/Language";

const Languages = (props) => {
    const languages = props.languages.map(language => {
        return (<Language language={language.language} proficiency={language.proficiency} key={language.language}/>);
    });

    return (
        <section className="resume-section language-section mb-5">
            <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Language</h2>
            <div className="resume-section-content">
                <ul className="list-unstyled resume-lang-list">
                    {languages}
                </ul>
            </div>
        </section>
    );
};

export default Languages;