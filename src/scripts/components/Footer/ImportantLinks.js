import React from 'react';
import { Link } from 'react-router-dom';

const importantLinks = () => {
    return (
        <div className="container">
            <p>
                <Link to={'/login/'}>
                    Login
                </Link>
            </p>
            <p>
                <Link to={'/register/'}>
                    Register
                </Link>
            </p>

            <p>
                <Link to={'/aboutUs/'}>
                    About Us
                </Link>

            </p>
        </div>
    )


};

export default importantLinks;