import React from 'react';
import ContactInfo from './ContactInfo';
import SocialMedia from './SocialMedia';
import Divider from '../Divider';
import Logo from './FooterLogo';
import ImportantLinks from './ImportantLinks';

const footer = () => {
    return (
        <div id='footer'>
            <Divider />
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Logo />
                        <br />
                        <ContactInfo />

                        <div className="row">
                            <p>&#169; Social Good US. All Rights Reserved.</p>
                        </div>
                    </div>
                    <div className="col-3">
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
