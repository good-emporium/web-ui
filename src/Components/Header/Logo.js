import React from 'react';
import { Link, Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
const logo = () => {
    return (
        <div className="container">
            
                <Link to={'/'}>
                    <img src="./../assets/img/good_emporium_logo_color.svg" />
                </Link>
            
        </div>
    )


};

export default logo;