import React from 'react';
import CharityContactInfo from './CharityContactInfo';
import CharityData from './CharityData';
import CharityEmailList from './CharityEmailListSignUp';
import CharityLogo from './CharityLogo';
import CharityName from './CharityName';
import Divider from './../../../Header/Divider';

const charityLeft = () => {
return (
<div className="container">  
    <CharityLogo />
    <CharityName />
    <CharityData />
    <CharityContactInfo />
    <Divider />
    <CharityEmailList />
</div>
)


};

export default charityLeft;