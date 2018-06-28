import React from 'react';

const footer = () => {
return(
    <div className="container"> 
       
            <div className="container">
                <div className="row">
                    <div className="col">
                        
                        <p>5540 N Lamar Blvd</p>
                        <p>Austin, TX 78751</p>
                        <p>(512)761-3842</p>
                        <p><a href="mailto:help@a+sg.com">help@a+sg.com</a></p>
                        <br/>
                        <div className="row">
                            <p>&copy; 2018 Austin Plus Social Good. All Rights Reserved.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="float-right">
                            <a href="https://www.facebook.com/SocialGood.us/">Facebook</a> &nbsp;
                            <a href="https://twitter.com/socialgoodus">twitter</a> &nbsp;
                            <a href="https://www.instagram.com/socialgood.us/">instagram</a> &nbsp;
                        </div>
                        <br/>
                        <br/>
                        <div className="float-right">
                            <a href="https://www.globalgoals.org/">globalgoals</a>
                        </div>
                    </div>
                </div>
            </div>
    </div>
)};

export default footer;