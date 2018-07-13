import React from 'react';
const bigTextStyle={
fontSize:'60px'
};
const normalTextStyle={
fontSize:'20px'
};




const goodGoesToWork = () => {
return (
<div className="container">  
<div >
        <div >
            <h2 style={bigTextStyle}> Where good <br /> goes to work </h2>
        </div>
        <div>
            <p style={normalTextStyle}>Search for your cause</p>
            <p style={normalTextStyle}>Choose your area.</p>
            <p style={normalTextStyle}>Do some good.</p>
        </div>
        <div>
            <p style={normalTextStyle}>Thousands of organizations are doing good work in your area, but finding which ones need your help can be tough. That's why the <strong>good</strong> emporium was created.</p>
            <p style={normalTextStyle}>Connected with<a href="http://SocialGood.US"> SocialGood.US</a> and the United Nations <a href="https://www.globalgoals.org/">Sustainable Development Goals</a>,<strong> good</strong> emporium helps good people do good.</p>
        </div>
    </div>

</div>
)


};

export default goodGoesToWork;