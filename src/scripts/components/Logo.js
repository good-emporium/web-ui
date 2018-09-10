import React from 'react';
import { Link, Route } from 'react-router-dom';

const logo = () => {
    return (
        <div className="d-inline col">
            
                <Link to={'/'}>
                    <img src="./../assets/img/good_emporium_logo_color.svg" />
                </Link>
            
        </div>
    )


};

export default logo;