import React, { Component } from 'react';
import CharityTypeMenu from './Charities/CharityTypeMenu';
import GroupOfCharities from './Charities/GroupOfCharities';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

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