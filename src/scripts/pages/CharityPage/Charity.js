import React, { Component } from 'react';
import CharityLeft from './CharitiyDetails/CharityLeft/CharityLeft';
import CharityRight from './CharitiyDetails/CharityRight/CharityRight';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

const charity = () => {
    return (
    <div> 
        <Header />
        <div className="container"> 
         <div className="row">
         <div class="col-4">
            <CharityLeft />
         </div> 
         <div class="col">
            <CharityRight />
         </div> 
         </div>
         </div>
    <Footer />
    </div>
    )
    
    
    };
    
    export default charity;