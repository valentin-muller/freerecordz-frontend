import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";

class BottomBar extends Component {
  render() {
    const { user, logout, isLoggedIn } = this.props;
    return (
      <nav className="navbar">
        {isLoggedIn ? (
          <>
            <Link to="/feed">
              {" "}
              <button className="navbar-button">NewsFeed</button>{" "}
            </Link>
            <br />
            <Link to="/upload">
              {" "}
              <button className="navbar-button">Upload</button>{" "}
            </Link>
            <Link to="/private">
              {" "}
              <button className="navbar-button">Profile</button>{" "}
            </Link>
          </>
        ) : (
          <>
            <h3>Welcome</h3>
          </>
        )}
      </nav>
    );
  }
}

export default withAuth(BottomBar);
