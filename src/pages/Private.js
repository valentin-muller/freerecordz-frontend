import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";

class Private extends Component {
  render() {
    const {email, fistName, lastName, username, password, savedMusicArr} = this.props.user;
    return (
      <div>
        <h1>Private Route</h1>
        <h1>Welcome {username}</h1>
        <h2>This will be the Profile page</h2>
      </div>
    );
  }
}

export default withAuth(Private);
