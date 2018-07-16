import React from 'react';
import Styles from './Charities.css';
const individualCharity = () => {
return (
<div className="container">  
    <div className={Styles.orgCard}>
        <img src="../../assets/img/newentry.png" alt='CharityLogo' />
        <a href="#">Organization Name</a>
        <p>Description</p>
    </div>
</div>
)
};
export default individualCharity;