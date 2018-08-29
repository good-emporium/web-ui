import React from 'react';
import LoginPage from '../LoginPage/Form';
import RegisterPage from '../RegisterPage/Form';
import Styles from './Header.css';
import { Link } from 'react-router-dom';


import { BrowserRouter as Router, Route } from 'react-router-dom';

var divStyle = {
    float: 'right',
    marginRight: '100px'
};

const loginRegisterSearch = () => {
    return (
        <div>
            <div style={divStyle}>
                <Link to={'/login/'}>
                    <a href='#'>Login </a>
                </Link>
                <Link to={'/register/'}>
                    <a href='#'>Register</a>
                </Link>
                <form className='float-right' autocomplete="off">
                    <div className="autocomplete">
                        <input type="image" src="../../assets/img/searchicon.svg" width='25px' height='25px' alt="Submit" />
                        <input className={Styles.searchbox} id="myInput" type="text" name="myCountry" placeholder="search to find your good..." />
                    </div>
                </form>
            </div>




        </div>
    )


};

export default loginRegisterSearch;