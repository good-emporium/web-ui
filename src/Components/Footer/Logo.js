import React from 'react';
const imgStyle = {
    width: '200px',
    height: '32px'
};
const logo = () => {
    return (
        <div className="container">
            <a href="index.html">
                <img className="img" src="./../assets/img/good_emporium_logo_color.svg" alt="Good Emporium" style={imgStyle} />
            </a>
        </div>
    )


};

export default logo;