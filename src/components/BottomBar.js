import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Spinner from "react-bootstrap/Spinner";

class BottomBar extends Component {
  render() {
    const { user, logout, isLoggedIn } = this.props;
    return (
      <nav className="navbar">
        {isLoggedIn ? (
          <>
            <ButtonGroup aria-label="Basic example">
              <Link to="/feed">
                {" "}
                <Button variant="secondary" className="navbar-button">
                  Feed
                </Button>{" "}
              </Link>
              <br />
              <Link to="/upload">
                {" "}
                <Button variant="secondary" className="navbar-button">
                  Upload
                </Button>{" "}
              </Link>
              <Link to="/private">
                {" "}
                <Button variant="secondary" className="navbar-button">
                  Profile
                </Button>{" "}
              </Link>
            </ButtonGroup>
          </>
        ) : (
          <>
            <h3>Welcome to Freerecordz! Sign up or Login to continue!</h3>
            <Spinner animation="grow" />
          </>
        )}
      </nav>
    );
  }
}

export default withAuth(BottomBar);
