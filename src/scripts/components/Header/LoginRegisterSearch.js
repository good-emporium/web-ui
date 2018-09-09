import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';


const loginRegisterSearch = () => {
    return (
        <div className='float-right'>
            <div>
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
                <form className='float-right' autoComplete="off">
                    <div className="autocomplete">
                        <input className="search-box" id="myInput" type="text" name="myCountry" />
                            <i className="fas fa-search"></i>
                        
                    </div>
                </form>
            </div>




        </div>
    )


};

export default loginRegisterSearch;