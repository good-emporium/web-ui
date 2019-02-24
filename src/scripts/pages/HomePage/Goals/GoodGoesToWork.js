import React from 'react';

const goodGoesToWork = () => {
    return (
        <div className='d-flex flex-column box1 text-left my-5'>
            <div className='my-3'>
                <div>
                    <h2 style={{ fontSize: '60px' }}>
                        where
                    <span className="ge-blue"><strong> good </strong></span>
                        goes to work
                </h2>
                </div>
                <div style={{ fontSize: '20px' }}>
                    <p><strong>
                        Search for your
                    <span className="ge-blue"> cause</span>.
                    </strong></p>
                    <p><strong>
                        Choose your
                    <span className="ge-blue"> area</span>.
                    </strong></p>
                    <p><strong>
                        Do some
                    <span className="ge-blue"> good</span>.
                    </strong></p>
                </div>
                <div className="medium-text">
                    <p>Thousands of organizations are doing good work in Austin TX, but finding which ones need your help can be tough. That's why  <span className="ge-blue"> <strong>good</strong>emporium </span> was created.</p>
                    <p>Connected with<a href="http://SocialGood.US"> SocialGood.US</a>, <span className="ge-blue"><strong> good</strong>emporium</span> helps good people do good.</p>
                    <p>Search organizations by selecting a global goal or typing a keyword in the search bar.</p>
                </div>
            </div>
        </div>
    )


};

export default goodGoesToWork;