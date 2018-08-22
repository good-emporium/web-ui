import React from 'react';
import Styles from './Charities.css';
import { Link, Route } from 'react-router-dom';
import CharityPage from '../../CharityPage/Charity'
const individualCharity = () => {
    return (


        <div className={Styles.orgCard}>

            <img src="../../assets/img/newentry.png" alt='CharityLogo' />
            <Link to={'/org/'}>
            <a>Organization Name</a>
            </Link>
            <p>Description</p>
            <Route path="/org/" component={CharityPage} />
        </div>
    )
};
export default individualCharity;