import React from 'react';
import { Link, withRouter } from 'react-router-dom'

const charityTypeMenu = withRouter((props) => {
    const { url } = props.match
    const currentPath = props.location.pathname.split('/')[2];
    return (
        <div className="container">
            <div className="row">
                <Link to={{ pathname: `${url}/${currentPath}/all`, state: { classification: 'All' }} }>
                    <p className='org-choice p-2'><u>All</u></p>
                </Link>
                <Link to={{ pathname: `${url}/${currentPath}/non-profit`, state: { classification: 'Non-profit' }} }>
                    <p className='org-choice p-2'>non-profit</p>
                </Link>
                <Link to={{ pathname: `${url}/${currentPath}/for-profit`, state: { classification: 'For-profit' }} }>
                    <p className='org-choice p-2'>for profit</p>
                </Link>
                <Link to={{ pathname: `${url}/${currentPath}/government`, state: { classification: 'Government-org' }} }>
                    <p className='org-choice p-2'>government</p>
                </Link>
            </div>
        </div>
    )
});

export default charityTypeMenu;
