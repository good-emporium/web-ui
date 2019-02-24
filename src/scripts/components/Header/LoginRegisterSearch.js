import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

const loginRegisterSearch = () => {
    return (
        <div className='d-inline col' id='navLinkSearch'>
            <span className="nav-links">
                <Link to={'/login/'}>
                    Login
                </Link>
            </span>
           <Search></Search>
        </div>
    )


};

export default loginRegisterSearch;
