import React from 'react';
import Profile from "../../Profile/Profile";

const Header = (props) => {
    return (
        <header className="resume-header pt-4 pt-md-0">
            <Profile header={props.header}/>
        </header>
    );
};

export default Header;