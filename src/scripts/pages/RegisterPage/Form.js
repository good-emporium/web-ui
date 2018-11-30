import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
const form = () => {
    return (
        <div className="container-fluid" id='registerPage'>
            <Header />
            <form>
                <h3>Sign Up</h3>
                <p>Create your Good Emporium Account:</p>
                <div className="row">
                    <div className="col-6">
                    <div className="container">
                        <div className="form-group">
                            <label className="animated-label" htmlFor="email"><b>Email:</b></label>
                            <input type="text" className="text-line"  name="email" required />
                        </div>
                        <div className="form-group">
                            <label className="animated-label" htmlFor="username"><b>Username:</b></label>
                            <input type="text" className="text-line"  autoComplete="username" name="username" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="psw"><b>Password:</b></label>
                            <input type="password" className="text-line"  name="psw" autoComplete="new-password" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="psw-repeat"><b>Repeat Password:</b></label>
                            <input type="password" className="text-line"  name="psw-repeat" autoComplete="new-password" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="firstName"><b>First Name:</b></label>
                            <input type="text" className="text-line"  name="firstName" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName"><b>Last Name:</b></label>
                            <input type="text" className="text-line"  name="lastName" />
                        </div>
                    </div>
                    </div>
                    <div className="column">
                        <div className="form-group">
                            <label htmlFor="address"><b>Address:</b></label>
                            <input type="text" className="text-line"  name="address" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="city"><b>City:</b></label>
                            <input type="text" className="text-line"  name="city" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="regionState"><b>State or Region:</b></label>
                            <input type="text" className="text-line"  name="regionState" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="country"><b>Country:</b></label>
                            <input type="text" className="text-line"  name="country" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="zipCode"><b>Zip Code:</b></label>
                            <input type="text" className="text-line"  name="zipCode" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneNumber"><b>Phone Number:</b></label>
                            <input type="text" className="text-line"  name="phoneNumber" />
                        </div>
                        
                        </div>
                        
                        </div>
                        <div className="form-group">
                            <label htmlFor="bio"><b>Bio:</b></label>
                            <input type="text" className="text-line"  name="bio" />
                        
                        
                        </div>
                        <button className="btn btn-outline-primary" type="submit">Sign Up</button>
                    
                
            </form>
            <Footer />
        </div>
    )


};

export default form;