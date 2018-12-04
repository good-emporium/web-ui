import React from 'react';
import { Link } from 'react-router-dom'

const charityTypeMenu = () => {
    return (
        <div className="container">
            <div className="row">
                <Link to={{ pathname: '#all', state: { classification: 'All' }} }>
                    <p className='org-choice p-2'><u>All</u></p>
                </Link>
                <Link to={{ pathname: '#non-profit', state: { classification: 'Non-profit' }} }>
                    <p className='org-choice p-2'>non-profit</p>
                </Link>
                <Link to={{ pathname: '', state: { classification: 'For-profit' }} }>
                    <p className='org-choice p-2'>for profit</p>
                </Link>
                <Link to={{ pathname: '', state: { classification: 'Government-org' }} }>
                    <p className='org-choice p-2'>government</p>
                </Link>
            </div>
        </div>
    )


};

export default charityTypeMenu;
