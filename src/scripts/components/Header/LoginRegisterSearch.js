import React from 'react';
import { Link } from 'react-router-dom';

const loginRegisterSearch = () => {
    return (
        <div className='d-inline col' id='navLinkSearch'>
            
                <span className="nav-links">
                <Link to={'/login/'}>
                    Login   
                </Link>
                </span>
                <span className="nav-links">
                <Link to={'/register/'}>
                    Register 
                </Link>
                </span>
                <form className='d-inline' autoComplete="off">
                    <span className="autocomplete">
                        <input className="search-box" id="myInput" type="text" name="myCountry" />
                            <i className="fas fa-search"></i>
                        
                    </span>
                </form>
            




        </div>
    )


};

export default loginRegisterSearch;