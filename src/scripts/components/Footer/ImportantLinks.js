import React from 'react';
import { Link } from 'react-router-dom';

const importantLinks = () => {
    return (
        <div className="container">
        <br />
            <p className="footerSpacing"> 
                <Link to={'/login/'}>
                    Login
                </Link>
            </p>
            <p className="footerSpacing">
                <Link to={'/register/'}>
                    Register
                </Link>
            </p>

            <p className="footerSpacing">
                <Link to={'/aboutUs/'}>
                    About Us
                </Link>

            </p>
        </div>
    )


};

export default importantLinks;