import React from 'react';
import { Link, Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
const logo = () => {
    return (
        <div className="container">
            <a>
                <Link to={'/goal/poverty'}>
                    <img src="./../assets/img/good_emporium_logo_color.svg" />
                </Link>
            </a>
        </div>
    )


};

export default logo;