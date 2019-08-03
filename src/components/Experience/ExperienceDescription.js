import React from 'react';
import WorkExperienceTechnologyUsed from "./WorkExperienceTechnologyUsed";

const ExperienceDescription = (props) => {
    const technologies = props.experience.technologies.map((technology) => {
        return (<WorkExperienceTechnologyUsed technology={technology}/>);
    });

    const description = props.experience.description.map((description) => {
        if (typeof description === "string") {
            return (<p>{description}</p>)
        } else {
            const descriptionEl = (<p>{description.description}</p>);

            const detailsEl = description.details.map(detail => {
                const links = [];

                if(detail.more && detail.more.link) {
                    links.push(( <a href={detail.more.link} target='_blank' rel='noopener noreferrer'>{detail.more.title}</a>))
                }

                if(detail.download) {
                    links.push((<a href={detail.download} target='_blank' rel='noopener noreferrer'>Download</a>));
                }

                if(detail.source) {
                    links.push(<a href={detail.source} target='_blank' rel='noopener noreferrer'>Source Code</a>);
                }

                return (
                    <li className="experience-detail">
                        {detail.title}
                        <div>
                           {links.map((link, i) => (<span>{link} {(i +1) === links.length? '' : ' | '} </span>))}
                        </div>
                    </li>
                );
            });

            if (detailsEl.length) {
                return (
                    <div>
                        {descriptionEl}
                        <ul>
                            {detailsEl}
                        </ul>
                    </div>
                );
            }

            return descriptionEl;
        }
    });

    return (
        <div className="resume-timeline-item-desc">
            {description}
            {technologies.length ? (
                <div>
                    <h4 className="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
                    <ul className="list-inline">
                        {technologies}
                    </ul>
                </div>
            ) : ''}
        </div>
    );
};

export default ExperienceDescription;