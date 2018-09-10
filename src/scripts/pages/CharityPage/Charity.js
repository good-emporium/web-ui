import React, { Component } from 'react';
import CharityLeft from './CharitiyDetails/CharityLeft/CharityLeft';
import CharityRight from './CharitiyDetails/CharityRight/CharityRight';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const charity = () => {
    return (
        <div id='charityPage'>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <CharityLeft />
                    </div>
                    <div className="col">
                        <CharityRight />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )


};

export default charity;