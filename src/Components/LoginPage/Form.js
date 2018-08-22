import React from 'react';
const form = () => {
    return (
        <div className="container">
            <form>
                <h1>Sign In</h1>
                <label for="username"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="username" required />
                <br />
                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />
                <br />
                <button type="button">Cancel</button>
                <button type="submit">Sign In</button>
            </form>
        </div>
    )


};

export default form;