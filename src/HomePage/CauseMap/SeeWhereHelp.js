import React from 'react';

const bigTextStyle={
    fontSize:'60px'
    };
    const normalTextStyle={
    fontSize:'20px'
    };
    
const seeWhereHelp = () => {
return (
<div className="container">  
    <h3 style={bigTextStyle}>see where<br />help is needed</h3>
    <p style={normalTextStyle}>Finding your cause matters, but finding where help is most needed can be even more important.</p>
</div>
)


};

export default seeWhereHelp;