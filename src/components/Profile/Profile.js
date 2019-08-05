import React from 'react';
import PrimaryInfo from "./PrimaryInfo/PrimaryInfo";
import SecondaryInfo from "./SecondaryInfo/SecondaryInfo";

const Profile = (props) => {
    return (
        <div className="media flex-column flex-md-row">
            <img className="mr-3 img-fluid picture mx-auto" src={props.header.profileImageUrl} alt=""/>
            <div className="media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0">
                <PrimaryInfo name={props.header.name} title={props.header.title} metadata={props.header.metadata}/>
                <SecondaryInfo socialMedia={props.header.socialMedia}/>
            </div>
        </div>
    );
};

export default Profile;