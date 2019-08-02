import React from 'react';
import PrimaryInfo from "../Profile/PrimaryInfo";
import SecondaryInfo from "../Profile/SecondaryInfo";

const Header = (props) => {
    return (
        <header className="resume-header pt-4 pt-md-0">
            <div className="media flex-column flex-md-row">
                <img className="mr-3 img-fluid picture mx-auto" src={props.header.profileImageUrl} alt=""/>
                <div className="media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0">
                    <PrimaryInfo name={props.header.name} title={props.header.title} metadata={props.header.metadata}/>
                    <SecondaryInfo socialMedia={props.header.socialMedia}/>
                </div>
            </div>
        </header>
    );
};

export default Header;