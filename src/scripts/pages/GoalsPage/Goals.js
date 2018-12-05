import React, { Component } from 'react';
import CharityTypeMenu from './Charities/CharityTypeMenu';
import GroupOfCharities from './Charities/GroupOfCharities';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const goals = (props) => {
    const { state } = props.location
    const { classification, sdgId } = state ? state : null;
    return (
        <div id='goalsPage'>
            <Header />
            <CharityTypeMenu />
            <GroupOfCharities sdgId={sdgId} classification={classification}/>
            <Footer />
        </div>
    )


};

export default goals;
