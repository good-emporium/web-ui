import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
const form = () => {
    return (
        <div id='registerPage'>
            <Header />
            <form>
                <h3>Sign Up</h3>
                <p>Create your Good Emporium Account:</p>
                <h4>User Info: </h4>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label className="animated-label" htmlFor="email"><b>Email:</b></label>
                        <input type="text" className="form-control" name="email" placeholder="Email" required />
                    </div>
                    <div className="form-group col-md-6">
                        <label className="animated-label" htmlFor="username"><b>Username:</b></label>
                        <input type="text" className="form-control" autoComplete="username" name="username" placeholder="Username" required />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="psw"><b>Password:</b></label>
                        <input type="password" className="form-control" name="psw" autoComplete="new-password" placeholder="Password" required />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="psw-repeat"><b>Repeat Password:</b></label>
                        <input type="password" className="form-control" name="psw-repeat" autoComplete="new-password" placeholder="Password" required />
                    </div>
                    <div class="form-group col-md-2">
                        <label for="title">Title:</label>
                        <select id="title" class="form-control">
                            <option selected>...</option>
                            <option>Mr.</option>
                            <option>Mrs.</option>
                            <option>Miss</option>
                            <option>Ms</option>
                            <option>Dr.</option>
                        </select>
                    </div>
                    <div className="form-group col-md-5">
                        <label htmlFor="firstName"><b>First Name:</b></label>
                        <input type="text" className="form-control" name="firstName" placeholder="First Name" required />
                    </div>
                    <div className="form-group col-md-5">
                        <label htmlFor="lastName"><b>Last Name:</b></label>
                        <input type="text" className="form-control" name="lastName" placeholder="Last Name" required />
                    </div>
                    <div className="form-group col-md-6" >
                        <label htmlFor="address"><b>Address:</b></label>
                        <input type="text" className="form-control" name="address" placeholder="1234 Main St" required />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputAddress2">Address 2</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" required />
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="city"><b>City:</b></label>
                        <input type="text" className="form-control" name="city" placeholder="City" required />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="regionState"><b>State or Region:</b></label>
                        <input type="text" className="form-control" name="regionState" placeholder="State or Region" />
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="postalCode"><b>Postal Code:</b></label>
                        <input type="text" className="form-control" name="postalCode" placeholder="Postal Code" required />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="country"><b>Country:</b></label>
                        <input type="text" className="form-control" name="country" placeholder="Country" required />
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="phoneNumber"><b>Phone Number:</b></label>
                        <input type="text" className="form-control" name="phoneNumber" placeholder="Phone Number" required />
                    </div>
                </div>


                <h4>Company Information:</h4>
                <div className="form-row">
                    <div className="form-group col-md-6" >
                        <label htmlFor="organizationName"><b>Organization Name:</b></label>
                        <input type="text" className="form-control" name="organizationName" placeholder="Organization Name" required />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="website"><b>Website:</b></label>
                        <input type="text" className="form-control" name="website" placeholder="Website" required/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="organizationEmailAddress"><b>Organization Email Address:</b></label>
                        <input type="text" className="form-control" name="organizationEmailAddress" placeholder="Organization Email Address" required/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="einNumber"><b>EIN Number:</b></label>
                        <input type="text" className="form-control" name="einNumber" placeholder="EIN Number" required/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="addressOfOrganization"><b>Address of Organization:</b></label>
                        <input type="text" className="form-control" name="addressOfOrganization" placeholder="Address of Organization" required/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="subsidiariesAffiliate"><b>Subsidiaries/Affiliate:</b></label>
                        <input type="text" className="form-control" name="subsidiariesAffiliate" placeholder="Subsidiaries/Affiliate" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="notes"><b>Notes:</b></label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"  name="notes" placeholder="Notes/Comments"></textarea>
                    </div>
                </div>


                <button className="btn btn-outline-primary" type="submit">Next</button>

            </form>
            <Footer />
        </div>
    )


};

export default form;