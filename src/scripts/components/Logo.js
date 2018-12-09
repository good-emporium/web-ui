import React from 'react';
import { NavLink } from 'react-router-dom';

const logo = () => {
    return (
        <div className="d-inline col" id="logoContainer">

            <NavLink exact to="/">
                <img className="ge-logo" src="./../assets/img/good_emporium_logo_color.svg" />
                <div className="small-text tagline"> where <span className="ge-blue-bold">good</span> goes to work</div>
            </NavLink>

        </div>
    )


};

export default logo;