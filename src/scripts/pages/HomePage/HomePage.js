import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Goals from './Goals/Goals';
import Footer from '../../components/Footer/Footer';
import CauseMap from './CauseMap/CauseMap';

const homePage = () => {
    return (
        <div id='homePage'>
            <Header />
            <Goals />
            <CauseMap />
            <Footer />
        </div>
    )
};

export default homePage;