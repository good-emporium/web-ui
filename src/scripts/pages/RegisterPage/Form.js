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
                <div class="row">
                    <div class="column">
                        <div className="form-group">
                            <label htmlFor="email"><b>Email</b></label>
                            <input type="text" className="form-control" placeholder="Enter Email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="username"><b>Username</b></label>
                            <input type="text" className="form-control" placeholder="Enter Username" autoComplete="username" name="username" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="psw"><b>Password</b></label>
                            <input type="password" className="form-control" placeholder="Enter Password" name="psw" autoComplete="new-password" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                            <input type="password" className="form-control" placeholder="Repeat Password" name="psw-repeat" autoComplete="new-password" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="firstName"><b>First Name</b></label>
                            <input type="text" className="form-control" placeholder="Enter First Name" name="firstName" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName"><b>Last Name</b></label>
                            <input type="text" className="form-control" placeholder="Enter Last Name" name="lastName" />
                        </div>
                    </div>
                    <div class="column">
                        <div className="form-group">
                            <label htmlFor="address"><b>Address</b></label>
                            <input type="text" className="form-control" placeholder="Enter Address" name="address" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="city"><b>City</b></label>
                            <input type="text" className="form-control" placeholder="Enter City" name="city" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="regionState"><b>State or Region</b></label>
                            <input type="text" className="form-control" placeholder="Enter State or Region" name="regionState" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="country"><b>Country</b></label>
                            <input type="text" className="form-control" placeholder="Enter Country" name="country" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="zipCode"><b>Zip Code</b></label>
                            <input type="text" className="form-control" placeholder="Enter Zip Code" name="zipCode" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneNumber"><b>Phone Number</b></label>
                            <input type="text" className="form-control" placeholder="Enter Phone Number" name="phoneNumber" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="bio"><b>Bio</b></label>
                            <input type="text" className="form-control" placeholder="Enter Bio" name="bio" />
                        </div>
                        <button className="btn btn-outline-primary" type="submit">Sign Up</button>
                    </div>
                </div>
            </form>
            <Footer />
        </div>
    )


};

export default form;