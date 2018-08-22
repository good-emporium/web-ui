import React from 'react';
import Styles from './../HomePage.css';
const seeWhereHelp = () => {
    return (
        <div className="container">
            <h3 className={Styles.BigText}>see where<br /> <span className={Styles.highlightGreen}>help</span> is needed</h3><br />

            <p className={Styles.NormalText}>Finding your cause matters,<br /> but finding where help is most needed <br /> can be even more important.</p>
        </div>
    )


};

export default seeWhereHelp;