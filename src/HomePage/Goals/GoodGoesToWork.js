import React from 'react';
import Styles from './../HomePage.css';

const goodGoesToWork = () => {
return (
<div className='d-flex flex-column box1 text-left my-5'>  
<div >
        <div >
            <h2 className={Styles.BigText}> where <span className={Styles.highlight}>good</span>  <br /> goes to work </h2>
        </div>
        <div className={Styles.NormalText}>
            <p>Search for your <span className={Styles.highlight}>cause</span></p>
            <p>Choose your <span className={Styles.highlight}>area.</span></p>
            <p>Do some <span className={Styles.highlight}>good.</span></p>
        </div>
        <div className='my-3'>
            <div className={Styles.NormalText}>
                <p>Thousands of organizations are doing good work in your area, but finding which ones need your help can be tough. That's why the  <span className={Styles.goodemporium}> <strong>good</strong>emporium </span> was created.</p><br />
                <p>Connected with<a href="http://SocialGood.US"> SocialGood.US</a> and the United Nations <a href="https://www.globalgoals.org/">Sustainable Development Goals</a>,<span className={Styles.goodemporium}><strong> good</strong>emporium</span> helps good people do good.</p>
            </div>
        </div>
    </div>

</div>
)


};

export default goodGoesToWork;