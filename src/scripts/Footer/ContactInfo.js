import React from 'react';

const pStyle ={
fontSize:'15px'
};



const searchBar = () => {
return (
    <div className="container">  
        <p style={pStyle}> 5540 N Lamar Blvd</p>
        <p style={pStyle}>Austin, TX 78751</p>
        <p style={pStyle}>(512)761-3842</p>
        <p style={pStyle}><a href="mailto:help@a+sg.com"><span className="">help@a+sg.com</span></a></p>
        <br/>
    </div>
)


};

export default searchBar;