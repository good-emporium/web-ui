import React from 'react';
import { Link, Route } from 'react-router-dom';

const footerLogo = () => {
    return (
        <div className="container" id="logoContainer">
                <p className="footerSpacing">Powered by</p>
              
                <Link to={'/'}>
                    <img className="ge-logo" src="./../assets/img/socialgoodus_logo.svg" />
                </Link>
                <br />
            
        </div>
    )


};

export default footerLogo;