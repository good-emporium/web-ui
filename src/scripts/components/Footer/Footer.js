import React from 'react';
import ContactInfo from './ContactInfo';
import SocialMedia from './SocialMedia';
import Divider from '../Divider';
import Logo from '../Logo';
import ImportantLinks from './ImportantLinks';

const footer = () => {
    return (
        <div id='footer'>
            <Divider />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Logo />
                        <ContactInfo />

                        <div className="row">
                            <p>&#169; Social Good US. All Rights Reserved.</p>
                        </div>
                    </div>
                    <div className="col-3 important-links">
                        <ImportantLinks />
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
