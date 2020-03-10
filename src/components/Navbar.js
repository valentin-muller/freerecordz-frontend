import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";

import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/Buttontoolbar"

class TopNavbar extends Component {
  render() {
    const { user, logout, isLoggedIn } = this.props;
    console.log('this.props :', this.props);

    return (
      <nav className="navbar">
        {isLoggedIn ? (
          <>
            <ButtonToolbar>
              <Button
                variant="outline-primary"
                onClick={() => {
                  logout();
                }}
              >
                Logout
              </Button>
            </ButtonToolbar>

            <ButtonToolbar>
              <Link to="/search">
                {" "}
                <Button variant="outline-primary" className="navbar-button">
                  Search
                </Button>{" "}
              </Link>
            </ButtonToolbar>
          </>
        ) : (
          <>
            <ButtonToolbar>
              <Link to="/login">
                {" "}
                <Button variant="outline-primary" className="navbar-button">
                  Login
                </Button>{" "}
              </Link>
            </ButtonToolbar>
            <br />
            <ButtonToolbar>
              <Link to="/signup">
                {" "}
                <Button variant="outline-primary" className="navbar-button">
                  Sign Up
                </Button>{" "}
              </Link>
            </ButtonToolbar>
          </>
        )}
      </nav>
    );
  }
}

export default withAuth(TopNavbar);

            // <button onClick={ () => {logout()}} >Logout</button>
            // <Link to="/search">
            //   {" "}
            //   <button className="navbar-button">Search</button>{" "}
            // </Link>
