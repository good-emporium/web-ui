import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
const form = () => {
    return (
        <div className="container" id='loginPage'>
        <Header />
            <form>
                <h1>Sign In</h1>
                <div className="form-group">
                    <label htmlFor="username"><b>Username:</b></label>
                    <input type="text" className="text-line"  name="username" required />
                </div>
                <div className="form-group">
                    <label htmlFor="psw"><b>Password:</b></label>
                    <input type="password" className="text-line"  name="psw" required />
               </div>
                <button className="btn btn-outline-primary" type="submit">Sign In</button>
            </form>
            <Footer />
        </div>
    )


};

export default form;