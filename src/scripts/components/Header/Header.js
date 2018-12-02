import React from 'react';
import Divider from '../Divider';
import Logo from '../Logo';
import LoginRegisterSearch from './LoginRegisterSearch';

const header = () => {
    return (
        <div id='header'>
           
            <div className='row'>
                <Logo />
                <LoginRegisterSearch />
            </div>
            <Divider />



        </div>
    )


};

export default header;