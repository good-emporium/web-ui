import React, { Component } from 'react';
import Description from './Description';
import MeetTheTeam from './MeetTheTeam';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const aboutUs = () => {
    return (
        <div id='aboutUsPage'>
            <Header />
            <Description />
            <MeetTheTeam />
            <Footer />
        </div>
    )


};

export default aboutUs;