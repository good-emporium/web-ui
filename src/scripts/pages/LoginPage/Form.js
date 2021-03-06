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
                    <input type="text" className="form-control"  name="username" placeholder="Username" required />
                </div>
                <div className="form-group">
                    <label htmlFor="psw"><b>Password:</b></label>
                    <input type="password" className="form-control"  name="psw" placeholder="Password" required />
               </div>
                <button className="btn btn-outline-primary" type="submit">Sign In</button>
            </form>
            <p id="forgotYourPassword"> Forgot Your Password? Click <a href="#">here</a></p>
            <Footer />
        </div>
    )


};

export default form;