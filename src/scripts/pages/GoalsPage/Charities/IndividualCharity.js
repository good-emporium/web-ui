import React from 'react';
import { Link, Route } from 'react-router-dom';
import CharityPage from '../../CharityPage/Charity'

const individualCharity = () => {
    return (


        <div className="org-card">

            <img src="../../assets/img/newentry.png" alt='CharityLogo' />
            <Link to={'/org/'}>
            <div>Organization Name</div>
            </Link>
            <p>Description</p>
            <Route path="/org/" component={CharityPage} />
        </div>
    )
};
export default individualCharity;