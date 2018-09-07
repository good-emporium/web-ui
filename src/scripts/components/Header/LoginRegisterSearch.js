import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';


const loginRegisterSearch = () => {
    return (
        <div className='float-right'>
            <div>
                <Link to={'/login/'}>
                    Login   
                </Link>
                &nbsp;
                <Link to={'/register/'}>
                    Register 
                </Link>
                &nbsp;
                <form className='float-right' autoComplete="off">
                    <div className="autocomplete">
                        <input className="search-box" id="myInput" type="text" name="myCountry" />
                            <i class="fas fa-search"></i>
                        
                    </div>
                </form>
            </div>




        </div>
    )


};

export default loginRegisterSearch;