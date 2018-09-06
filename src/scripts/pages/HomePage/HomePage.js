import React, { Component } from 'react';
import Header from '../../Header/Header';
import Goals from './Goals/Goals';
import Footer from '../../Footer/Footer';
import CauseMap from './CauseMap/CauseMap';

const homePage = () => {
    return (
    <div>  
       <Header />
        <Goals />
        <CauseMap />
        <Footer />
    
    
    </div>
    )
    
    
    };
    
    export default homePage;