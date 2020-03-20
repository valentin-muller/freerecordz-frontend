import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";

class Private extends Component {
  render() {
    const {email, firstName, lastName, username, password, savedMusicArr} = this.props.user;
    return (
      <div>
        
      </div>
    );
  }
}

export default withAuth(Private);


        // <h1>Private Route</h1>
        // <h1>Welcome {username} to your profile</h1>
        // <h3>Your email: {email}</h3>
        // <h3>your Firstname: {firstName}</h3>
        // <h3>Your Lastname: {lastName}</h3>
        // <h3>Your username: {username}</h3>
        // <h3>Your password: {password}</h3>
        // <h3>Your saved tracks: {savedMusicArr}</h3>