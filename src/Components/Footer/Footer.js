import React from 'react';
import ContactInfo from './ContactInfo';
import SocialMedia from './SocialMedia';
import Divider from './Divider';
import Logo from './Logo';
const footer = () => {
    return (
        <div>
            <Divider />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Logo />
                        <ContactInfo />

                        <div className="row">
                            <p>&copy; 2018 Austin Plus Social Good. All Rights Reserved.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="float-right">

                            <SocialMedia />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default footer;