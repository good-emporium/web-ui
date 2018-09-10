import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
const form = () => {
    return (
        <div className="container" id='registerPage'>
        <Header />
            <form>
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>
                <label htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required />
                <br />
                <label htmlFor="username"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" autoComplete="username" name="username" required />
                <br />
                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" autoComplete="new-password" required />
                <br />
                <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" autoComplete="new-password"  required />
                <br />
                <label htmlFor="firstName"><b>First Name</b></label>
                <input type="text" placeholder="Enter First Name" name="firstName"  />
                <br />
                <label htmlFor="lastName"><b>Last Name</b></label>
                <input type="text" placeholder="Enter Last Name" name="lastName" />
                <br />
                <label htmlFor="address"><b>Last Name</b></label>
                <input type="text" placeholder="Enter Address" name="address" />
                <br />
                <label htmlFor="city"><b>City</b></label>
                <input type="text" placeholder="Enter City" name="city" />
                <br />
                <label htmlFor="regionState"><b>State or Region</b></label>
                <input type="text" placeholder="Enter State or Region" name="regionState" />
                <br />
                <label htmlFor="country"><b>Country</b></label>
                <input type="text" placeholder="Enter Country" name="country" />
                <br />
                <label htmlFor="zipCode"><b>Zip Code</b></label>
                <input type="text" placeholder="Enter Zip Code" name="zipCode" />
                <br />
                <label htmlFor="phoneNumber"><b>Phone Number</b></label>
                <input type="text" placeholder="Enter Phone Number" name="phoneNumber" />
                <br />
                <label htmlFor="bio"><b>Bio</b></label>
                <input type="text" placeholder="Enter Bio" name="bio" />
                <br />
                <button type="button">Cancel</button>
                <button type="submit">Sign Up</button>
            </form>
            <Footer />
        </div>
    )


};

export default form;