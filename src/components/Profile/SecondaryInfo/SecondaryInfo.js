import React from 'react';
import SocialMedia from "../SocialMedia/SocialMedia";

const SecondaryInfo = (props) => {
    const socialMedia = props.socialMedia.map((socialMedia => {
        return (<SocialMedia
            class={socialMedia.class}
            url={socialMedia.url}
            key={socialMedia.url}
        />);
    }));

    return (
        <div className="secondary-info ml-md-auto mt-2">
            <ul className="resume-social list-unstyled">
               {socialMedia}
            </ul>
        </div>
    );
};

export default SecondaryInfo;