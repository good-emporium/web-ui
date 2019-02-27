import React from 'react';
import GoodGoesToWork from './GoodGoesToWork';
import PicGoals from './PicGoals';
import MakingConnection from './MakingConnection';

const goals = () => {
    return (
        <div className="container">
            <div className="d-flex flex-row">
                <GoodGoesToWork />
                <PicGoals />
                
            </div>
            <MakingConnection />
        </div>
    )


};

export default goals;