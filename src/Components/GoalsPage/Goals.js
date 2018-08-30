import React, { Component } from 'react';
import CharityTypeMenu from './Charities/CharityTypeMenu';
import GroupOfCharities from './Charities/GroupOfCharities';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import { BrowserRouter as Route } from 'react-router-dom';

const goals = () => {
    return (
        <div>
            <Header />
            <CharityTypeMenu />
            <GroupOfCharities />
            <Footer />
        </div>
    )


};

export default goals;