import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";

// import Button from "react-bootstrap/Button";
// import ButtonGroup from "react-bootstrap/ButtonGroup";
// import Spinner from "react-bootstrap/Spinner";

import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import ButtonGroup from "react-bootstrap/ButtonGroup";


class BottomBar extends Component {
  render() {
    const { user, logout, isLoggedIn } = this.props;
    return (
      <nav className="footer">
        {isLoggedIn ? (
          <>
            {/* <nav className="navbar footer"> */}
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
                  <h3 id="h3bottomnav">
                    Welcome to Freerecordz! Sign up or Login to continue!
                  </h3>
                  <Spinner animation="grow" id="h3bottomnav" />
                </>
              )}
            {/* </nav> */}
          </>
        ) : (
          <>
            <h3>Lol</h3>
          </>
        )}
      </nav>
    );
  }
}

export default withAuth(BottomBar);





      
      