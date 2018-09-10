import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
const form = () => {
    return (
        <div className="container" id='loginPage'>
        <Header />
            <form>
                <h1>Sign In</h1>
                <label htmlFor="username"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="username" required />
                <br />
                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />
                <br />
                <button type="button">Cancel</button>
                <button type="submit">Sign In</button>
            </form>
            <Footer />
        </div>
    )


};

export default form;