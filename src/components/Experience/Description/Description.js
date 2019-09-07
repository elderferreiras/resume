import React from 'react';
import { Carousel } from 'react-bootstrap';
import TechnologyUsed from "../TechnologyUsed/TechnologyUsed";

const Description = (props) => {
    const technologies = props.experience.technologies.map((technology) => {
        return (<TechnologyUsed technology={technology} key={props.experience.title + technology}/>);
    });

    const description = props.experience.description.map((description) => {
        if (typeof description === "string") {
            return (<p key={description}>{description}</p>)
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
                    <li className="experience-detail" key={props.experience + '_' +detail.title}>
                        {detail.title}
                        <div>
                           {links.map((link, i) => (<span key={link + " " + i}>{link} {(i +1) === links.length? '' : ' | '} </span>))}
                        </div>
                    </li>
                );
            });

            if (detailsEl.length) {
                return (
                    <div key={detailsEl}>
                        {descriptionEl}
                        <ul>
                            {detailsEl}
                        </ul>
                    </div>
                );
            }

            return detailsEl;
        }
    });

    let carousel;

    if(props.experience.media) {
        const carouselItems = props.experience.media.map((media) => {
            return (
                <Carousel.Item key={media.url}>
                    <img
                        className="d-block w-100"
                        src={media.url}
                        alt={media.label}
                    />
                </Carousel.Item>
            );
        });

        carousel = carouselItems.length ? (<Carousel className="mb-2">
            {
                carouselItems
            }
        </Carousel>) : '';
    }

    return (
        <div className="resume-timeline-item-desc">
            {description}
            {carousel}
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

export default Description;