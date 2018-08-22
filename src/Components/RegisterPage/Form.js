import React from 'react';
const form = () => {
    return (
        <div className="container">
            <form>
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>
                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required />
                <br />
                <label for="username"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="username" required />
                <br />
                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />
                <br />
                <label for="psw-repeat"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
                <br />
                <label for="firstName"><b>First Name</b></label>
                <input type="text" placeholder="Enter First Name" name="firstName" />
                <br />
                <label for="lastName"><b>Last Name</b></label>
                <input type="text" placeholder="Enter Last Name" name="lastName" />
                <br />
                <label for="address"><b>Last Name</b></label>
                <input type="text" placeholder="Enter Address" name="address" />
                <br />
                <label for="city"><b>City</b></label>
                <input type="text" placeholder="Enter City" name="city" />
                <br />
                <label for="state"><b>State</b></label>
                <input type="text" placeholder="Enter State" name="state" />
                <br />
                <label for="zipCode"><b>Zip Code</b></label>
                <input type="text" placeholder="Enter Zip Code" name="zipCode" />
                <br />
                <label for="phoneNumber"><b>Phone Number</b></label>
                <input type="text" placeholder="Enter Phone Number" name="phoneNumber" />
                <br />
                <label for="bio"><b>Bio</b></label>
                <input type="text" placeholder="Enter Bio" name="bio" />
                <br />
                <button type="button">Cancel</button>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )


};

export default form;